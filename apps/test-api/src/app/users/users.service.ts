import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@test-api/database';
import { InsertResult, Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private userRepo: Repository<User>
  ) { }


  async create(nome: string): Promise<InsertResult> {
    return this.userRepo.insert({ nome })
  }


}
