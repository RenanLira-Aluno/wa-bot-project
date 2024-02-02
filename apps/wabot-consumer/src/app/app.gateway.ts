import { Controller, Get, MessageEvent, Sse } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { Message } from 'venom-bot';
import { Observable, interval, map } from 'rxjs';
import { ConnectedSocket, OnGatewayConnection, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket } from 'dgram';
import { Server } from 'http';

@WebSocketGateway({ namespace: 'events' })
export class AppGateway implements OnGatewayConnection {



  public socket: Socket


  handleConnection(@ConnectedSocket() client: Socket, ...args: any[]) {
    this.socket = client
  }



}
