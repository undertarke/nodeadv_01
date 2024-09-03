import { Injectable } from '@nestjs/common';
import { PrismaClient, products, orders } from '@prisma/client';
import { PrismaPostgreService } from 'prisma/prismaPostgre.service';

@Injectable()
export class AppService {
  // prisma = new PrismaClient()
  constructor(

    private prismaService: PrismaPostgreService
  ) { }


  async getHello() {

    // this.prisma.products.findMany();
    let data = await this.prismaService.products.findMany();
    return data
  }

}
