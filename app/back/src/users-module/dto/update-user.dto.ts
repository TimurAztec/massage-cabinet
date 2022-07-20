import { IsEmail, IsPhoneNumber, IsString, Length } from "class-validator";
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto {

    @IsString({message: 'Must be a string!'})
    @IsEmail({}, {message: 'Email should match email pattern'})
    emails: string[];

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