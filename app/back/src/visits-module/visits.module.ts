import { Module } from "@nestjs/common";
import { VisitsController } from "./visits.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Visit } from "./visits.entity";
import { VisitsService } from "./visits.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Visit])
  ],
  controllers: [VisitsController],
  providers: [VisitsService],
})
export class VisitsModule {}