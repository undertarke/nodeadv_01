import { Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  order(){


    // order => lưu thông tin đơn hàng
    
    // notify => gửi mail thông báo cho user

    // ship => lưu thông tin shipping
   
    // payment => lưu thông tin thanh toán

   

  }

}
