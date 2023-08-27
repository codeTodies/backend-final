import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import { join } from 'path';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bodyParser: true,
    cors: true,
    logger: ['debug', 'error', 'log', 'warn'],
  });

  app.setGlobalPrefix('api');

  // Use express static middleware to access the upload folder
  app.use('/upload', express.static(join(__dirname, '..', 'uploads'))); // Changed 'upload' to 'uploads'

  const config = new DocumentBuilder()
    .setTitle('API Movie')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
