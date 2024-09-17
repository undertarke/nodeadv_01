import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {

    constructor(
        private prismaService: PrismaService
    ) { }


    async getProductDetail(id) {

        let data = await this.prismaService.product.findFirst({
            where: {
                product_id: Number(id)
            }
        })
        return data;
    }

    async getProduct() {

        let data = await this.prismaService.product.findMany()
        return data;
    }

    async getCategory() {

        let data = await this.prismaService.category.findMany()
        return data;
    }

    async getProductType(categoryId) {

        let data = await this.prismaService.product.findMany({
            where: {
                category_id: categoryId
            }
        })
        return data;
    }



    async getSearch(name, page) {

        let index = (page - 1) * 5;

        let data = await this.prismaService.product.findMany({
            where: {
                product_name: {
                    contains: name
                }
            },
            skip: index,
            take: 5
        })
        return data;
    }


}
