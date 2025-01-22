import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProjectServiceService } from '../service/project-service.service';
import { EmployeeServiceService } from '../../employee/service/employee-service.service';
import { CustomerServiceService } from '../../customer/service/customer-service.service';
import { DepartmentServiceService } from '../../department/service/department-service.service';
interface Customer {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  gender: string;
  email: string;
}
interface Employee{
  firstname: string,
  lastname: string,
  role: string,
}
interface Department{
  name: string
}
interface Project {
  id: string;
  name: string;
  department: string;
  employees: string[];
  customer: string;
  requirements: string;
  skills: string[];
  result_image: string[];
  startDate: Date;
  endDate: Date;
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
  employees: Employee[] = [];
  customers: Customer[] = [];
  departments: Department[] = [];
  skillsString: string = '';
  newProject : Project = {
    id: '',
    name: '',
    department: '',
    employees: [],
    customer: '',
    requirements: '',
    skills: [],
    result_image: [],
    startDate: new Date(),
    endDate: new Date(),
    status: ''
  }
  constructor(
    private projectService: ProjectServiceService,
    private employeeService: EmployeeServiceService,
    private CustomerService: CustomerServiceService,
    private departmentService: DepartmentServiceService,
    private router: Router,
  ) {}

  addProject():void {
    if(this.newProject.customer === '' || this.newProject.department === '' || this.newProject.employees === null || this.newProject.name === '' || this.newProject.requirements === '' || this.newProject.skills === null || this.newProject.startDate === null || this.newProject.status === '')
    {
      alert('Please fill out all the field')
      return;
    }
    if(this.newProject.endDate <= this.newProject.startDate)
      {
        alert('End Date cannot happen before Start Date')
        return;
      }
    this.newProject.skills = this.skillsString.split(',').map(skill => skill.trim())
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
          skills: [],
          result_image: [],
          startDate: new Date(),
          endDate: new Date(),
          status: ''
        }
        this.skillsString = '';
        this.router.navigate(['/dashboard/project'])
      }
    )
  }
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
    this.departmentService.getDepartments().subscribe(
      (departmentData) => {
        this.departments = departmentData
      }
    )
    }
}
