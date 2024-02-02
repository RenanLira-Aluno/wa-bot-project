import { Module } from '@nestjs/common';

import { AppGateway } from './app.gateway';
import { AppService } from './app.service';
import { AppController } from './app.controller';


@Module({
  imports: [],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule { }
