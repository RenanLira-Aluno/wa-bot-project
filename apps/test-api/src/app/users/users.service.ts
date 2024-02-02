import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@test-api/database';
import { InsertResult, Repository } from 'typeorm';
import { Whatsapp, create } from 'venom-bot';

@Injectable()
export class UsersService {

  private instance: Whatsapp

  constructor(
    @Inject('WA_BOT_SERVICE') private client: ClientKafka
  ) { }



  openSession() {

    create({
      session: 'wabot',
      catchQR: (qrcode, a, at, urlCode) => {
        this.client.emit('qrcode', qrcode)
      }
    }).then((client) => {
      this.instance = client
      this.allEventsInit()
    })


  }

  private allEventsInit() {
    this.instance.onAnyMessage((message) => {
      if (message.fromMe) {
        this.client.emit('me', message)
      }

    })

    this.instance.onMessage((message) => {
      if (message.isGroupMsg) {
        this.client.emit('from_group', message)
      }
    })
  }


}
