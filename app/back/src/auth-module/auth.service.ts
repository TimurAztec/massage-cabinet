import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users-module/users.service";
import { CreateUserDto } from "../users-module/dto/create-user.dto";
import { JwtService } from "@nestjs/jwt";
import * as crypto from "crypto";
import { User } from "src/users-module/users.entity";
import { Any, In, Like } from "typeorm";

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {
  }

  public async signin(userDto: CreateUserDto) {
    const user: User = await this.usersService.getOneUser({where: {emails: userDto.email, phone: userDto.phone}});
    const clientPassword: string = await crypto.createHash("sha256").update(userDto.password).digest("hex");
    let tokenPayload;
    if (user && (clientPassword == user.password)) {
      tokenPayload = {
        email: user.emails[0],
        id: user.id,
      };
    } else {
      throw new UnauthorizedException({message: 'Bad creds'});
    }
    return { token: this.jwtService.sign(tokenPayload) };
  }

  public async signup(userDto: CreateUserDto) {
    const candidate = await this.usersService.getOneUser({where: {emails: In([userDto.email])}});
    if (candidate) {
      throw  new HttpException("User already exist!", HttpStatus.BAD_REQUEST);
    }
    const hash: string = await crypto.createHash("sha256").update(userDto.password).digest("hex");
    const user: User = await this.usersService.create({ ...userDto, emails: [userDto.email] , password: hash });
    const tokenPayload = {
      email: user.emails[0],
      id: user.id,
    };
    return { token: this.jwtService.sign(tokenPayload) };
  }

}