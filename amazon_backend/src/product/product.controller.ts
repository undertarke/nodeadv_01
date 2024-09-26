import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get("/save")
  luuCache() {
    return this.productService.getProduct(0)
  }

  @Get("/remove")
  xoaCache() {
    return this.productService.getProduct(1)
  }

  @Get("/update")
  updateProduct() {
    return this.productService.updateProduct()
  }

  @Get("/get-all")
  getProduct() {
    return this.productService.getProduct(2)
  }


  @Get("/get-category")
  getCategory() {
    return this.productService.getCategory()
  }

  @Get("/get-product-type/:categoryId")
  getProductType(@Param("categoryId") categoryId) {
    return this.productService.getProductType(categoryId)
  }

  @Get("/`search-pagination`")
  getSearch(@Query("name") name, @Query("page") page) {

    return this.productService.getSearch(name, page)
  }

  @Get("/get-product-detail/:id")
  getProductDetail(@Param("id") id) {

    return this.productService.getProductDetail(id)
  }


}
