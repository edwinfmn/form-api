import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { AllExceptionFilter } from './filters/all-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { RolesGuard } from './guard/roles.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  // app.useGlobalGuards(new RolesGuard())
  // app.useGlobalFilters(new HttpExceptionFilter());
  // const httpAdapterHost = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new AllExceptionFilter(httpAdapterHost));
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
