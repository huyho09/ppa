import { PartialType } from '@nestjs/swagger';
import { CreateProjectEmployeeDto } from './create-project-employee.dto';

export class UpdateProjectEmployeeDto extends PartialType(CreateProjectEmployeeDto) {}
