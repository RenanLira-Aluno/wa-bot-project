import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { Whatsapp, create } from "venom-bot";

@Injectable()
export class WaBotService implements OnModuleInit {

  private instance: Whatsapp

  constructor(
    @Inject('WA_BOT_SERVICE') private client: ClientKafka
  ) { }

  onModuleInit() {
    create({
      session: 'wabot',
      catchQR: (qrcode, a, at, urlCode) => {
        this.client.emit('qrcode_catch', qrcode)
      }
    }).then((client) => {
      this.instance = client
      this.allEventsInit()
    })
  }

  private allEventsInit() {
    this.instance.onAnyMessage((message) => {
      if (message.fromMe) {
        this.client.emit('new_message:me', message)
      }

    })

    this.instance.onMessage((message) => {
      if (message.isGroupMsg) {
        this.client.emit('new_message:from_group', message)
      }
    })
  }




}
