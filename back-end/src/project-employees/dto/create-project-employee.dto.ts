import { IsNumber, IsString, IsUUID } from "class-validator";

export class CreateProjectEmployeeDto {
    
    @IsUUID()
    projectId: string;
    
    @IsUUID()
    employeeId: string;  

    @IsString()
    role_in_project: string;

    @IsNumber()
    effort: number;

    @IsString()
    task: string;
}
