import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Salon } from "./salons.entity";

@Injectable()
export class SalonsService {

  constructor(
    @InjectRepository(Salon)
    private repository: Repository<Salon>
  ) {
  }

  public getMany(params?: any): Promise<Salon[]> {
    return this.repository.find(params ? params : {});
  }

}