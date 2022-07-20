import { IsEmail, IsPhoneNumber, IsString, Length } from "class-validator";

export class CreateUserDto {
  @IsString({message: 'Must be a string!'})
  @IsEmail({}, {message: 'Email should match email pattern'})
  email: string;

  @IsString({message: 'Must be a string!'})
  first_name: string;

  @IsString({message: 'Must be a string!'})
  last_name: string;
  
  @IsString({message: 'Must be a string!'})
  @IsPhoneNumber('UA', {message: 'Phone must be a valid phone number'})
  phone: string;

  @IsString({message: 'Must be a string!'})
  @Length(4, 16, {message: '4 - 16 symbols'})
  password: string;
}