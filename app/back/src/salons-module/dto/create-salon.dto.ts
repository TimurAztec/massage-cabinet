import {IsString} from "class-validator";
  
export class CreateSalonDto {
  
    @IsString()
    name: string;
  
    @IsString()
    address: string;
  
    @IsString()
    contacts: string;
  
}