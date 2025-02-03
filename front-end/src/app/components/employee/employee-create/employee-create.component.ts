import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DepartmentServiceService } from '../../department/service/department-service.service';
import { ProjectServiceService } from '../../project/service/project-service.service';



interface Employee {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  gender: string;
  email: string;
  skills: string[];
  role: string;
  is_admin: boolean;
  project: {name: string, id: string};
}

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
})
export class EmployeeCreateComponent implements OnInit{
  employees: Employee[] = [];
  projects: { id: string; name: string }[] = [];
  newEmployee = {
    id: '',
    avatar: '',
    firstname: '',
    lastname: '',
    gender: '',
    email: '',
    skills: [],
    role: '',
    is_admin: false,
    project: {id: '',name: ''}
  };

  constructor(
    private employeeService: EmployeeServiceService,
    private projectService: ProjectServiceService,
    private router: Router,
  ) {}

ngOnInit(): void {
    this.projectService.getProjectsWithApiCall().subscribe(
      (projectsData) => {
        this.projects =projectsData.map((project) => ({
          id: project.id,
          name: project.name,
        }))
      }
    )
}
  addEmployee(){
    this.employeeService.createEmployeeWithApiCall(this.newEmployee).subscribe(
      () => {
        this.router.navigate(['/dashboard/employee'])
      }
    )
  }
  
}
