import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { PrismaPostgreService } from 'prisma/prismaPostgre.service';
import { PrismaMysqlService } from 'prisma/prismaMysql.service';

@ApiTags("product")
@Controller('product')
export class ProductController {


  constructor(private readonly productService: ProductService,
private prismaPostgreService: PrismaPostgreService,
private prismaMysqlService: PrismaMysqlService,

  ) {}

  @Get("find-postgres")
  findPostgresAll() {
    return this.prismaPostgreService.products.findMany()
  }
  @Get("find-mysql")
  findMysqlAll() {
    return this.prismaMysqlService.products.findMany()

  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
