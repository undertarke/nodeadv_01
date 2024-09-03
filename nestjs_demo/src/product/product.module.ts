import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaPostgreService } from 'prisma/prismaPostgre.service';
import { PrismaMysqlService } from 'prisma/prismaMysql.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaPostgreService, PrismaMysqlService],
})
export class ProductModule { }
