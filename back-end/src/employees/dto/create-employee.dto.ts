import { IsArray, IsBoolean, IsDate, IsNumber, IsOptional, isString, IsString, IsUUID, ValidateNested } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
    @ApiProperty({ description: 'The avatar of employee', example : "" , required: false })
    @IsOptional()
    @IsString()
    avatar: string;

    @ApiProperty({ description: 'The email of employee', example : "abc@gmail.com" , required: false })
    @IsOptional()
    @IsString()
    email: string;

    @ApiProperty({ description: 'The gender of employee', example : true , required: false })
    @IsOptional()
    @IsBoolean()
    gender: boolean;

    @ApiProperty({ description: 'The name of employee', example : "Nguyen Van A" , required: false })
    @IsOptional()
    @IsString()
    employeeName: string;

    @ApiProperty({ description: 'The role of employee', example : "User" , required: false })
    @IsOptional()
    @IsString()
    role: string;

    @ApiProperty({ description: 'Is Admin', example : true , required: false })
    @IsOptional()
    @IsBoolean()
    is_admin: boolean;

    @ApiProperty({ description: 'The Password', example : "Password@123" , required: false })
    @IsOptional()
    @IsString()
    password: string;

    @ApiProperty({ description: 'The project id', example : "" , required: false })
    @IsOptional()
    @IsString()
    projectId?: string;

    @ApiProperty({ description: 'The department id', example : "" , required: false })
    @IsOptional()
    @IsString()
    departmentId?: string;

    @ApiProperty({ description: 'Team', example : "abc" , required: false })
    @IsOptional()
    @IsString()
    team: string;

    @ApiProperty({ description: 'Level', example : 50 , required: false })
    @IsOptional()
    @IsNumber()
    level: number;

    @ApiProperty({ description: 'SO join date', example: '2025-01-10' , required: false })
    @IsOptional()
    @IsDate()
    so_join_date: Date;

    @ApiProperty({ description: 'Bosch join date', example: '2025-01-10' , required: false })
    @IsOptional()
    @IsDate()
    bosch_join_date: Date;

    @ApiProperty({ description: 'Resource type', example : "type" , required: false })
    @IsOptional()
    @IsString()
    resource_type: string;

    @ApiProperty({ description: 'Total year experience', example : 2, required: false })
    @IsOptional()
    @IsNumber()
    total_year_experience: number;

    @ApiProperty({ description: 'Status', required: false })
    @IsOptional()
    @IsString()
    status: string;

    @ApiProperty({ description: 'Deactivation reason', example: "text",required: false })
    @IsOptional()
    @IsString()
    deactivation_reason: string;

    @ApiProperty({ description: 'Last work date', example: '2025-01-10' , required: false })
    @IsOptional()
    @IsDate()
    last_work_date: Date;

    @ApiProperty({ description: 'Termination date', example: '2025-01-10' , required: false })
    @IsOptional()
    @IsDate()
    termination_date: Date;

    @ApiProperty({ description: 'Maternity start date', example: '2025-01-10' , required: false })
    @IsOptional()
    @IsDate()
    maternity_start_date: Date;

    @ApiProperty({ description: 'Maternity end date', example: '2025-01-10' , required: false })
    @IsOptional()
    @IsDate()
    maternity_end_date: string;

    @ApiProperty({ description: 'Remarks', example: "",required: false })
    @IsOptional()
    @IsString()
    remarks: string;
}
