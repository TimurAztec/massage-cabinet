import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Visit } from "./visits.entity";
import { CreateVisitDto } from "./dto/create-visit.dto";

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