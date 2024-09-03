import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { PrismaPostgreService } from 'prisma/prismaPostgre.service';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }), ProductModule], // khai báo module đối tượng khác 
  controllers: [AppController], //định nghĩa API (endpoint, method)
  providers: [AppService, PrismaPostgreService], // định nghĩa logic, tính toán,...
})
export class AppModule { }

// 1 đối tượng đều có 3 module này
// @ : decorator