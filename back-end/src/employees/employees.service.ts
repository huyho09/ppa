import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { In, Repository } from 'typeorm';
import { Project } from 'src/projects/entities/project.entity';

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
    // if(createEmployeeDto.projectId){
    //   const project = await this.projectRepository.findOne({where: {id: createEmployeeDto.projectId}})
    //   if(project){
    //     new_employee.project = project
    //     await this.pushEmployeeToProject(new_employee,project.id)
    //   }
    //   else{
    //     new_employee.project = null
    //   }
    // }
    // else {
    //   new_employee.project = null
    // }
    if (!new_employee.avatar)
    {
      new_employee.avatar = '/assets/data/Avatar.jpg'
    }
    else {
      
    }
    return this.employeeRepository.save(new_employee)
  }

  findAll() {
    return this.employeeRepository.find({relations:['project']});
  }

  findOne(id: string) {
    return this.employeeRepository.findOneOrFail({where : {id},relations:['project']});
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this.employeeRepository.findOneOrFail({where: {id},relations: ['project']})
    if (!employee)
    {
      console.log("Can't find Employee")
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
