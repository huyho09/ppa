import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('avatar'))
  create(@Body() createEmployeeDto: CreateEmployeeDto,@UploadedFile() file: Express.Multer.File) {
    
    return this.employeesService.create(createEmployeeDto,file);
  }

  @Get()
  findAll() {
    return this.employeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('avatar'))
  
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto, @UploadedFile() file: Express.Multer.File) {
    return this.employeesService.update(id, updateEmployeeDto,file);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(id);
  }
}
