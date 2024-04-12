import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('send-message')
  sendMessage(@Body() body: { message: string }): { message: string } {
    const response = this.appService.getResponse(body.message);
    return { message: response };
  }
}
