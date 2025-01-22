import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { Project } from 'src/projects/entities/project.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>
  ){}
  create(createEmployeeDto: CreateEmployeeDto) {
    const new_employee = this.employeeRepository.create(createEmployeeDto)
    if(new_employee.gender === 'male')
      {
        new_employee.avatar = '/assets/data/Avatar.jpg'
      }
    if(new_employee.gender === 'female')
      {
        new_employee.avatar = '/assets/data/women.jpg'
      } 
    return this.employeeRepository.save(new_employee)
  }

  findAll() {
    return this.employeeRepository.find();
  }

  findOne(id: string) {
    return this.employeeRepository.findOneOrFail({where : {id}});
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    await this.employeeRepository.update(id,updateEmployeeDto)
    return this.employeeRepository.findOneOrFail({where: {id}});
  }

  async remove(id: string) {
    const employee = await this.employeeRepository.findOne({ where: { id }, relations: ['project'] });
    
    for (const project of employee.project) {
      project.employees = project.employees.filter(emp => emp.id !== id);
      
      await this.projectRepository.save(project);
    }

    await this.employeeRepository.delete(id);
    return { message: `Employee with ID ${id} successfully removed` };
  }
}
