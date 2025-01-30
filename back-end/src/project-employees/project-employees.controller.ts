import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectEmployeesService } from './project-employees.service';
import { CreateProjectEmployeeDto } from './dto/create-project-employee.dto';
import { UpdateProjectEmployeeDto } from './dto/update-project-employee.dto';

@Controller('project-employees')
export class ProjectEmployeesController {
  constructor(private readonly projectEmployeesService: ProjectEmployeesService) {}

  @Post()
  create(@Body() createProjectEmployeeDto: CreateProjectEmployeeDto) {
    return this.projectEmployeesService.create(createProjectEmployeeDto);
  }

  @Get()
  findAll() {
    return this.projectEmployeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectEmployeesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectEmployeeDto: UpdateProjectEmployeeDto) {
    return this.projectEmployeesService.update(+id, updateProjectEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectEmployeesService.remove(+id);
  }
}
