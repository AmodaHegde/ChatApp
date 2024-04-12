import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getResponse(message: string): string {
    if (message.toLowerCase().includes('hello')) {
      return 'Hello there!';
    } else if (message.toLowerCase().includes('how are you')) {
      return 'I am doing well, thank you!';
    } else {
      return 'I did not understand that.';
    }
  }
}
