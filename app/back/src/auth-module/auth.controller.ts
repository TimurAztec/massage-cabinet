import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "../users-module/dto/create-user.dto";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {

  constructor(private authService: AuthService) {
  }

  @Post('signin')
  async signin(@Body() userDto: CreateUserDto) {
    return this.authService.signin(userDto);
  }

  @Post('signup')
  async signup(@Body() userDto: CreateUserDto) {
    return this.authService.signup(userDto);
  }

}