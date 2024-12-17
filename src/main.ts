import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';
import {
  BadRequestException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // for nestjs validations
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      forbidNonWhitelisted: true,
      stopAtFirstError: true,
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new BadRequestException({
          errors: validationErrors.map((error) => ({
            field: error.property,
            message: Object.values(error.constraints || {}).join(', '),
          })),
          statusCode: 400,
        });
      },
    }),
  );

  mongoose.set('debug', true);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
