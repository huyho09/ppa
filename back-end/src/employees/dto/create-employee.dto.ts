import { IsArray, IsBoolean, IsOptional, isString, IsString, IsUUID, ValidateNested } from 'class-validator'

export class CreateEmployeeDto {

    @IsString()
    avatar: string;

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
    aboutMe: string;

    team: string;

    level: number;

    so_join_date: string;

    bosch_join_date: string;

    resource_type: string;

    total_year_experience: number;

    status: string;

    deactivation_reason: string;

    last_work_date: string;

    termination_date: string;

    maternity_start_date: string;

    maternity_end_date: string;

    remarks: string;
}
