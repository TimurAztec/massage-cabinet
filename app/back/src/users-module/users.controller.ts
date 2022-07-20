import { Controller, Get, Query, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { JwtAuthGuard } from "../auth-module/auth.guard";

@Controller()
export class UsersController {

  constructor(private usersService: UsersService) {
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getMany(@Query() queryParams) {
    return await this.usersService.getManyUsers(queryParams);
  }

}