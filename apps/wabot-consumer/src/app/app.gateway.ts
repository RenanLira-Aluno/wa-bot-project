
import { ConnectedSocket, OnGatewayConnection, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';


import { Server } from 'socket.io';

@WebSocketGateway({ namespace: 'events' })
export class AppGateway {



  @WebSocketServer()
  server: Server




}
