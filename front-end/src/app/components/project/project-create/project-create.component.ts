import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProjectServiceService } from '../service/project-service.service';
import { EmployeeServiceService } from '../../employee/service/employee-service.service';
interface Employee{
  firstname: string,
  lastname: string,
  role: string,
}
interface Project {
  id: string;
  name: string;
  department: string;
  employees: string[];
  customer: string;
  requirements: string;
  skills: string;
  result_image: string[];
  startDate: string;
  endDate: string;
  status: string;
}
@Component({
  selector: 'app-project-create',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './project-create.component.html',
  styleUrl: './project-create.component.scss'
})
export class ProjectCreateComponent implements OnInit{
  projects: Project[] = [];
  employees: Employee[] = []
  newProject : Project = {
    id: '',
    name: '',
    department: '',
    employees: [],
    customer: '',
    requirements: '',
    skills: '',
    result_image: [],
    startDate: '',
    endDate: '',
    status: ''
  }
  constructor(
    private projectService: ProjectServiceService,
    private employeeService: EmployeeServiceService
  ) {}

  addProject():void {
    this.projectService.createProject(this.newProject).subscribe(
      (project) => {
        this.projects.push(project)
        this.newProject = {
          id: '',
          name: '',
          department: '',
          employees: [],
          customer: '',
          requirements: '',
          skills: '',
          result_image: [],
          startDate: '',
          endDate: '',
          status: ''
        }
      }
    )
  }
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
    }
}
