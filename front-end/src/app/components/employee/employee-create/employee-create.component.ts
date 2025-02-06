import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ProjectServiceService } from '../../project/service/project-service.service';
import { HttpClient } from '@angular/common/http';

interface UploadResponse {
  message: string;
  filename: string;
}
interface Employee {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  gender: string;
  email: string;
  password:string;
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
    password: '',
    skills: [],
    role: '',
    is_admin: false,
    project: { id: '', name: '' },
  };
  avatarFile: File | null = null;
  avatarPreview: string |null = null

  constructor(
    private employeeService: EmployeeServiceService,
    private http: HttpClient,
    private projectService: ProjectServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectService.getProjectsWithApiCall().subscribe((projectsData) => {
      this.projects = projectsData;
    });
  }

  onFileSelect(event: any): void {
    const file:File = event.target.files[0];
    if(file){
      const formData = new FormData();
      formData.append('file',file,file.name)
      this.http.post<UploadResponse>('http://localhost:3000/upload-picture/upload', formData).subscribe(
        (response) => {
          console.log(response)
          this.newEmployee.avatar = response.filename
          console.log(this.newEmployee.avatar)
          this.avatarPreview = `http://localhost:3000/upload-picture/${response.filename}`
        }
      )
    }
  }

  addEmployee(): void {
      this.employeeService.createEmployeeWithApiCall(this.newEmployee).subscribe(
        (data) => {
          console.log(data)
          this.router.navigate(['/dashboard/employee']);
        }
      );
  }
}
