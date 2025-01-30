import { Type } from 'class-transformer';
import { IsString, IsArray, IsOptional, IsDate, ValidateNested } from 'class-validator'
import { CreateCustomerDto } from 'src/customers/dto/create-customer.dto';
import { CreateDepartmentDto } from 'src/departments/dto/create-department.dto';
import { CreateProjectEmployeeDto } from 'src/project-employees/dto/create-project-employee.dto';
export class CreateProjectDto {
        @IsString()
        project_name: string;

        @ValidateNested()
        @Type(()=>CreateDepartmentDto)
        @IsString()
        department : CreateDepartmentDto;
    
        @ValidateNested()
        @Type(()=>CreateProjectEmployeeDto)
        @IsArray()
        employees: CreateProjectEmployeeDto[];
 
        @ValidateNested()
        @Type(()=>CreateCustomerDto)
        @IsString()
        customer: CreateCustomerDto;

        @IsString()
        project_description: string;
        
        @IsArray()
        project_skills: string[];

        @IsString()
        project_requirements: string;
    
        @IsString()
        project_result: string;
    
        @IsString()
        @IsOptional()
        project_result_image: string;
    
        @IsString()
        project_start_date: string;
    
        @IsString()
        @IsOptional()
        project_end_date: string;

        @IsString()
        createdAt: string

        @IsString()
        lastUpdatedAt: string;
    
}
