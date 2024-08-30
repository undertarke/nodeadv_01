import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from 'prisma/prisma.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }), ProductModule], // khai báo module đối tượng khác 
  controllers: [AppController], //định nghĩa API (endpoint, method)
  providers: [AppService, PrismaService], // định nghĩa logic, tính toán,...
})
export class AppModule { }

// 1 đối tượng đều có 3 module này
// @ : decorator