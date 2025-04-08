import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';
import { Repository } from 'typeorm';
import { Project } from 'src/projects/entities/project.entity';
import { Employee } from 'src/employees/entities/employee.entity';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository : Repository<Department>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ){}
  create(createDepartmentDto: CreateDepartmentDto) {
    const new_department = this.departmentRepository.create(createDepartmentDto)
    const create_at = new Date()
    new_department.createdAt = create_at.getTime().toString()
    return this.departmentRepository.save(new_department);
  }

  findAll() {
    return this.departmentRepository.find({relations: ['employees']});
  }

  findOne(id: string) {
    return this.departmentRepository.findOneOrFail({where : {id},relations:['employees']});
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    await this.departmentRepository.update(id,updateDepartmentDto)
    return this.departmentRepository.findOneOrFail({where : {id},relations:[]});
  }

  async remove(id: string) {
    const projects = await this.projectRepository.find({where: {department:{id}}})
    for(const project of projects)
    {
      project.department = null;
      await this.projectRepository.save(project)
    }
    const employees = await this. employeeRepository.find({where: {department:{id}}})
    for(const emp of employees){
      emp.department = null
      await this.employeeRepository.save(emp)
    }
    return this.departmentRepository.delete(id)
  }
}
