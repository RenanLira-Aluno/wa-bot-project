import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { Message } from 'venom-bot';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @EventPattern('new_message:me')
  getData(
    @Payload() message: Message
  ) {
    console.log(message)
    return this.appService.getData();
  }

}
