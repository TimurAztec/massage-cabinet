import {
  IsEmail,
  IsNumber, IsOptional,
  IsPhoneNumber,
  IsString
} from "class-validator";

export class CreateVisitDto {

  @IsString()
  client_name: string;

  @IsEmail()
  @IsOptional()
  client_email: string;

  @IsPhoneNumber()
  client_phone: string;

  @IsString()
  @IsOptional()
  comment: string;

  @IsNumber()
  type: number;
}