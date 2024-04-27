import { Module } from '@nestjs/common';
import { CatsController } from './controller/cats.controller';
import { CatsService } from './service/cats.service';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';

@Module({
    controllers: [ CatsController ],
    providers: [ CatsService ],
    exports: [ CatsService ]
})
export class CatsModule {
    constructor(private catsService: CatsService) {}
}
