import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: "Luis", type: "string", description: "Nombre del usuario" })
    @IsString({message: "El dato tiene que ser string"})
    first_name: string;
    
    @ApiProperty({ example: "mera", type: "string", description: "Apellido del usuario" })
    @IsString()
    last_name: string;
    
    @ApiProperty({ example: 18, type: "number", description: "Edad del usuario" })
    @IsNumber()
    age: number;
}
