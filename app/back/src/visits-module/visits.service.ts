import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { InsertResult, Repository } from "typeorm";
import { Visit } from "./visits.entity";
import { CreateVisitDto } from "./visits.dto";

@Injectable()
export class VisitsService {

  constructor(
    @InjectRepository(Visit)
    private repository: Repository<Visit>
  ) {
  }

  public getMany(params?: any): Promise<Visit[]> {
    return this.repository.find(params);
  }

  public create(createDto: CreateVisitDto, params?: any): Promise<CreateVisitDto & Visit> {
    return this.repository.save(createDto);
  }

}