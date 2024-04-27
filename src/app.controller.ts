import { Controller, Get, HttpStatus, Redirect, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { Public } from './decorators/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Public()
  @Redirect('http://localhost:3000/api-info')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api-info')
  @Public()
  getAppVersion(@Res() res: Response) {
    const versionInfo = {
      appName: 'form-api',
      compilation: Math.random(),
      date: new Date().toLocaleString('es-EC', { timeZone: 'America/Guayaquil' }),
      version: '1.0.2'
    };
    res.status(HttpStatus.OK).json(versionInfo).send();
  }
}
