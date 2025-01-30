import { Injectable } from '@nestjs/common';
import { CreateProjectEmployeeDto } from './dto/create-project-employee.dto';
import { UpdateProjectEmployeeDto } from './dto/update-project-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEmployee } from './entities/project-employee.entity';
import { Repository,In } from 'typeorm';
import { Employee } from 'src/employees/entities/employee.entity';
import { Project } from 'src/projects/entities/project.entity';

@Injectable()
export class ProjectEmployeesService {
  constructor(
    @InjectRepository(ProjectEmployee)
    private projectEmployeeRepository: Repository<ProjectEmployee>,

    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,

    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ){}
  async create(createProjectEmployeeDto: CreateProjectEmployeeDto) {
    const { projectId, employeeId, role_in_project, effort, task } = createProjectEmployeeDto;

    const project = await this.projectRepository.findOne({where: {id: projectId}})
    const employees = await this.employeeRepository.find({
      where: {id: In([employeeId])}
    })

    const projectEmployees = employees.map(
      (employee) => {
        return this.projectEmployeeRepository.create({
          project,
          employee: employee,
          role_in_project,
          effort,
          task,
        })
      }
    )
    const savedProjectEmployees = this.projectEmployeeRepository.save(projectEmployees)
    return savedProjectEmployees
  }

  findAll() {
    return this.projectEmployeeRepository.find({relations: ['project','employee']});
  }

  findOne(id: number) {
    return this.projectEmployeeRepository.findOne({where: {id}});
  }

  async update(id: number, updateProjectEmployeeDto: UpdateProjectEmployeeDto) {
    await this.projectEmployeeRepository.update(id, updateProjectEmployeeDto)
    return this.projectEmployeeRepository.findOne({where : {id}});
  }

  remove(id: number) {
    return this.projectEmployeeRepository.delete(id);
  }
}
