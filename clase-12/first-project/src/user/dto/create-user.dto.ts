import { IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsString({message: "El dato tiene que ser string"})
    first_name: string;
    
    @IsString()
    last_name: string;
    
    @IsNumber()
    age: number;
}
