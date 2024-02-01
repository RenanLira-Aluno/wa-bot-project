import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'db.sqlite',
      entities: [User],
      synchronize: true
    })
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class DatabaseModule { }
