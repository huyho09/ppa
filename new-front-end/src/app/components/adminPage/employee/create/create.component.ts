import { CommonModule } from '@angular/common';
import { Component,ViewChild,ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProjectServiceService } from '../../project/project-service.service';
import { DepartmentServiceService } from '../../department/department-service.service';
import { RoleSerivceService } from '../../role/role-serivce.service';

interface UploadResponse {
  message: string;
  filename: string;
}
interface Employee {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  aboutMe:string;
  gender: string;
  email: string;
  joinDate:string;
  password:string;
  skills: string[];
  role: {id: string, name: string, privilege: Privilege };
  project: Project;
  department: {id: string, name: string}|null

}
export enum Privilege {
  User = 'user',
  Admin = 'admin',
  SuperAdmin = 'superAdmin'
}

interface Project {
  id: string;
  name: string;
}
@Component({
  selector: 'app-create',
  imports: [FormsModule,CommonModule,RouterModule],
  standalone: true,
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  employees: Employee[] = [];
  projects: { id: string; name: string }[] = [];
  departments: {id: string ; name: string}[] = [];
  roles: {id: string; name:string ; privilege: Privilege}[] = []
  newEmployee = {
    id: '',
    avatar: '',
    firstname: '',
    lastname: '',
    gender: '',
    aboutMe: '',
    joinDate: '',
    email: '',
    password: '',
    skills: [],
    role: {id: '', name: '', privilege: Privilege.User},
    is_admin: false,
    project: { id: '', name: '' },
    department: {id: '',name: ''}
  };
  avatarFile: File | null = null;
  avatarPreview: string |null = null
  user:any = {};

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(
    private employeeService: ServiceService,
    private http: HttpClient,
    private projectService: ProjectServiceService,
    private departmentService: DepartmentServiceService,
    private roleService : RoleSerivceService,
    private router: Router
  ) {}

  ngOnInit(): void {

    const userData = sessionStorage.getItem('User')
    if(userData){
      this.user = JSON.parse(userData)
    }
    this.projectService.getProjectsWithApiCall().subscribe((projectsData) => {
      this.projects = projectsData;
    });
    this.departmentService.getDepartments().subscribe(
      (departmentsData) => {
        this.departments = departmentsData
      }
    )
    this.roleService.getRoles().subscribe(
      (rolesData) => {
        this.roles = rolesData
      }
    )
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
          console.log("Emp avatar: ",this.newEmployee.avatar)
          this.avatarPreview = `http://localhost:3000/upload-picture/${response.filename}`
        }
      )
    }
  }

  addEmployee(): void {
      this.employeeService.createEmployee(this.newEmployee).subscribe(
        (data) => {
          console.log(data)
          this.router.navigate(['/admin/employee']);
        }
      );
  }
}
