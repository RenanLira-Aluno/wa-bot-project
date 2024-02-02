import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@test-api/database';
import { UsersController } from './users.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'WA_BOT_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'wabot',
            brokers: ['localhost:9092']
          },
          consumer: {
            allowAutoTopicCreation: true,
            groupId: 'wabot-consumer'
          }
        }
      }
    ])
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule { }
