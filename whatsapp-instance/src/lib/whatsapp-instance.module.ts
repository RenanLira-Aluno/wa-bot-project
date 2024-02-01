import { Module } from '@nestjs/common';
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
            groupId: 'wabot-consumer'
          }
        }
      }
    ])
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class WhatsappInstanceModule { }
