import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Controller('product')
export class ProductController {
    constructor(

        @Inject("PRODUCT_NAME") private productSerivce: ClientProxy
    ) { }

    @Get("/get-all")
    async getProduct() {
        let listProduct = await lastValueFrom(this.productSerivce.send("get-all-product", { id: 69 })) // gửi message queue cho service

        return listProduct
    }
}
