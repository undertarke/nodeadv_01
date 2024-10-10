import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express'
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston'
import { Logger } from '@nestjs/common';

// yarn add nest-winston winston

async function bootstrap() {

  const logger = WinstonModule.createLogger({
    transports:[
      new winston.transports.Console(),
      new winston.transports.File({
        filename:'logs/error.log',
        level:'error'
      })
    ]
  })

  const app = await NestFactory.create(AppModule,{
    logger
  });

  app.use(express.static("*"))
  app.enableCors()
  
  await app.listen(8080);
  Logger.error("demo error")
}
bootstrap();
