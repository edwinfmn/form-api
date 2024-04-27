import { Body, Controller, Delete, Get, HttpCode,
         HttpStatus,
         Param, ParseIntPipe, Post, Put, Query, Req } from "@nestjs/common";
import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { Observable, of } from "rxjs";
import { CatsService } from "../service/cats.service";
import { CreateCatDto } from "../dto/create-cat.dto";
import { UpdateCatDto } from "../dto/update-cat.dto";
import { ForbiddenException } from "../exception/forbidden.exception";
import { ZodValidationPipe } from "src/pipes/zod-validation.pipe";
import { createCatSchema } from "../dto/create-cat.schema";
import { EmValidationPipe } from "src/pipes/em-validation.pipe";
import { RolesGuard } from "src/guard/roles.guard";
import { Roles } from "src/decorators/roles.decorator";
import { Public } from "src/decorators/public.decorator";

@Controller('cats')
// @UseFilters(new HttpExceptionFilter())
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Post()
    // @UsePipes(new ZodValidationPipe(createCatSchema))
    async create(@Body(new EmValidationPipe()) createCatDto: CreateCatDto) {
        return this.catsService.create(createCatDto);
    }

    @Public()
    @Get('search')
    async findOneQuery(@Query('id', ParseIntPipe) id: number) {
        console.log('find one query pipe')
        return this.catsService.findOne();
    }
    @Get()
    @Roles(['admin'])
    async findAll() {
        console.log('findAll');
        return this.catsService.findAll();
    }
    // @Post()
    // findAllResponse(@Res() res: Response) {
    //     console.log(res);
    //     return res.status(HttpStatus.CREATED).json( { "error": false } ).send();
    // }
    
    // @Get()
    // findAllByQuery(@Query() query: any) {
    //     return `This action return all cats (limit: ${query.limit} items)`;
    // }
    @Get('/exception')
    async findException() {
        throw new ForbiddenException;
    }
    @Get('/async')
    async findAsync(): Promise<any[]> {
        return [];
    }
    @Get('/obs')
    findObs(): Observable<any[]> {
        return of([]);
    }
    @Public()
    @Get('same*')
    @HttpCode(202)
    showSame(@Req() request: Request): Object {
        return request.body;
    }
    @Public()
    @Get(':id')
    findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) 
                id: number): String {
        console.log(`Cat with ID: ${id} it's same than UUID: ${randomUUID()}`);
        return `This action returns a #${id} cat`;
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
}