import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { ApiProperty } from '@nestjs/swagger';

class UserDto {
  @ApiProperty({ description: "asdas" })
  ma: Date

  @ApiProperty()
  ten

  @ApiProperty()
  email
}

@Controller("/app")
export class AppController {
  constructor(
    private readonly appService: AppService,

    private configService: ConfigService,

  ) { }


  @Get("/demo/:id2/:name2")
  getHello(
    @Req() req,

    @Query("id") id: string,
    @Query("name") name: string,

    @Param("id2") id2: string,
    @Param("name2") name2: string,

    @Body() body: UserDto
  ) {

    // request: 
    // -url: 
    //  + query params: localhost:8080/app/demo?id=123&name=hello
    // let { id, name } = req.query
    //  + route params (endpoint params): localhost:8080/app/demo/123/hello
    // let { id2, name2 } = req.params

    // - body
    let { ma, ten, email } = body

    //response
    return this.appService.getHello();
  }


  @Get("/get-product")
  getHello2() {
    return this.appService.getHello()
  }
}
