import { Controller, Get, Post, Body } from "@nestjs/common";
import { CreateSalonDto } from "./dto/create-salon.dto";
import { SalonsService } from "./salons.service";

@Controller()
export class SalonsController {

  constructor(private salonsService: SalonsService) {
  }

  @Get()
  async getMany() {
    return await this.salonsService.getMany();
  }

  @Post()
  async create(@Body() dto: CreateSalonDto) {

  }

}