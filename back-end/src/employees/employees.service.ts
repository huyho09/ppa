import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { Project } from 'src/projects/entities/project.entity';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>
  ){}
  async create(createEmployeeDto: CreateEmployeeDto) {
    const new_employee = this.employeeRepository.create(createEmployeeDto)
    const salt = await bcrypt.genSalt(10)
    new_employee.password = await bcrypt.hash(new_employee.password, salt)
    return this.employeeRepository.save(new_employee)
  }

  findAll() {
    return this.employeeRepository.find({relations:['project']});
  }
  findOne(id: string) {
    return this.employeeRepository.findOneOrFail({where : {id},relations:['project']});
  }
  findOnebyEmail(email: string){
    return this.employeeRepository.findOne({where: {email}})
  }
  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this.employeeRepository.findOneOrFail({where: {id},relations: ['project']})
    if (!employee)
    {
      console.log("Can't find Employee")
    }
    if(updateEmployeeDto.password)
    {
      const salt = await bcrypt.genSalt(10)
      updateEmployeeDto.password = await bcrypt.hash(updateEmployeeDto.password, salt)
    }
    if (updateEmployeeDto.projectId && employee.project && updateEmployeeDto.projectId !== employee.project.id) 
      {
      const newProject = await this.projectRepository.findOne({where: {id: updateEmployeeDto.projectId}})
      if (employee.project.id)
      {
        const oldProject = await this.projectRepository.findOne({where: {id: employee.project.id}})
        if(oldProject){
          oldProject.employees = await oldProject.employees.filter(emp => emp.id !== employee.id);
          await this.projectRepository.save(oldProject)
        }
      }
      newProject.employees.push(employee)
      await this.projectRepository.save(newProject)
      employee.project = newProject;

    }
    else if(!updateEmployeeDto.projectId)
    {
      if(employee.project)
      {
        const oldProject = await this.projectRepository.findOne({where: {id: employee.project.id},relations:['employees']})
        if(oldProject){
          oldProject.employees = oldProject.employees.filter(emp => emp.id !== employee.id)
          await this.projectRepository.save(oldProject)
        }
      }
      employee.project = null
      
    }
    Object.assign(employee,updateEmployeeDto)
    return this.employeeRepository.save(employee)

  }

  async remove(id: string) {
    return await this.employeeRepository.delete(id);
  }

  async pushEmployeeToProject(emp: Employee, proId:string){
    const project = await this.projectRepository.findOne({where: {id: proId},relations: ['employees']})
    if(project){
      project.employees.push(emp)
      return await this.projectRepository.save(project)
    }
  }
}
