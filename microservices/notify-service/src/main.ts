import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

async function bootstrap() {
  const logger = WinstonModule.createLogger({
    defaultMeta: { service: "notify services" },
    transports: [
      new winston.transports.Console(),
      new winston.transports.Http({
        host:"logstash",
        port:5044,
        level:"error"
      })
    ],
  });

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    logger,
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://admin:1234@some-rabbit:5672'],
      queue: 'notify_queue',
      queueOptions: {
        durable: false
      }

    }
  });

  await app.listen();
}
bootstrap();
