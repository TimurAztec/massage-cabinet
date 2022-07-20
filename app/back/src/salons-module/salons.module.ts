import { Module } from "@nestjs/common";
import { SalonsController } from "./salons.controller";
import { SalonsService } from "./salons.service";
import { Salon } from "./salons.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forFeature([Salon])
  ],
  controllers: [SalonsController],
  providers: [SalonsService],
})
export class SalonsModule {}