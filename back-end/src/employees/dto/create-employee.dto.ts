import { IsArray, IsBoolean, IsString } from 'class-validator'
export class CreateEmployeeDto {
    
    @IsString()
    avatar:string;
    
    @IsString()
    email: string;

    @IsString()
    gender: string;

    @IsString()
    firstname: string;

    @IsString()
    lastname: string;

    @IsArray()
    skills: string[];

    @IsString()
    role: string;

    @IsBoolean()
    is_admin: boolean;

}
