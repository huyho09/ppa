import { IsArray, IsBoolean, IsOptional, isString, IsString, IsUUID, ValidateNested } from 'class-validator'

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
    password: string;

    @IsOptional()
    projectId?: string;

    @IsOptional()
    departmentId?: string;
    
    @IsString()
    @IsOptional()
    aboutMe:string;

}
