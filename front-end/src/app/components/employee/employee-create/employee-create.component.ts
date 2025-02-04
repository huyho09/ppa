import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
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
  project: Project;
}

interface Project {
  id: string;
  name: string;
}

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
})
export class EmployeeCreateComponent implements OnInit {
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
    project: { id: '', name: '' },
  };
  avatarFile: File | null = null;
  avatarPreview: string |null = null

  constructor(
    private employeeService: EmployeeServiceService,
    private projectService: ProjectServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectService.getProjectsWithApiCall().subscribe((projectsData) => {
      this.projects = projectsData;
    });
  }

  onFileSelect(event: any): void {
    this.avatarFile = event.target.files[0];
    if(this.avatarFile)
    {
      this.avatarPreview = URL.createObjectURL(this.avatarFile)
    }
  }

  addEmployee(): void {
    if (this.avatarFile) {
      this.employeeService.createEmployeeWithApiCall(this.newEmployee, this.avatarFile).subscribe(
        (data) => {
          console.log(data)
          this.router.navigate(['/dashboard/employee']);
        }
      );
    } else {
      this.newEmployee.avatar = '/assets/data/Avatar.jpg';

      this.employeeService.createEmployeeWithApiCall(this.newEmployee, null).subscribe(
        () => {
          this.router.navigate(['/dashboard/employee']);
        }
      );
    }
  }
}
