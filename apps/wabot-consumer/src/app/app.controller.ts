import { Controller } from "@nestjs/common";
import { AppGateway } from "./app.gateway";
import { EventPattern, Payload } from "@nestjs/microservices";


@Controller()
export class AppController {
  constructor(private readonly appGateway: AppGateway) { }

  @EventPattern('qrcode')
  getHello(@Payload() data: string) {
    this.appGateway.server.emit('qrcode', data)
  }
}
