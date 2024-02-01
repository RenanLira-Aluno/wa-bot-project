import { Module } from '@nestjs/common';


import { DatabaseModule } from '@test-api/database';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DatabaseModule, UsersModule]
})
export class AppModule {}
