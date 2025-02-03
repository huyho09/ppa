import { IsArray, IsBoolean, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer';
import { CreateProjectDto } from 'src/projects/dto/create-project.dto';

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

    @IsString()
    @IsOptional()
    projectId: string;

}
