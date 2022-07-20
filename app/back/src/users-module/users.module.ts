import { forwardRef, Module } from "@nestjs/common";
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from "./users.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "../auth-module/auth.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([User])
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule {}