import { Body, Controller, Get, Post } from "@nestjs/common";
import { VisitsService } from "./visits.service";
import { CreateVisitDto } from "./dto/create-visit.dto";

@Controller()
export class VisitsController {

  constructor(private visitsService: VisitsService) {
  }

  @Get()
  async getMany() {
    return await this.visitsService.getMany();
  }

  @Post()
  async create(@Body() visitDto: CreateVisitDto) {
    return await this.visitsService.create(visitDto);
  }
}