import { Injectable } from '@nestjs/common';
import { FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { User } from "./users.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private repository: Repository<User>
  ) {}

  public async create(newUserData: any): Promise<User> {
    return this.repository.save(newUserData);
  }

  public async getManyUsers(params?: any): Promise<User[]> {
    return this.repository.find(params ? params : {});
  }

  public async getOneUser(params: any) {
    return this.repository.findOne(params);
  }

}