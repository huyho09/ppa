import { Component, OnInit } from '@angular/core';
import { Privilege, ServiceService } from '../service.service';
import { ProjectServiceService } from '../../project/project-service.service';
import { DepartmentServiceService } from '../../department/department-service.service';
import { RoleSerivceService } from '../../role/role-serivce.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface Employee {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  aboutMe:string;
  joinDate:string;
  gender: string;
  email: string;
  password:string;
  skills: string[];
  role: {id: string, name: string, privilege: Privilege };
  project: Project;
  department: {id: string, name: string}|null

}

interface Project {
  id: string;
  name: string;
}

interface UploadResponse {
  message: string;
  filename: string;
}
@Component({
  selector: 'app-update',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  projects: { id: string; name: string }[] = [];
  departments: {id: string; name: string}[] = [];
  roles: {id: string; name:string ; privilege: Privilege}[] = []

  employee: Employee = {
    id: '',
    avatar: '',
    firstname: '',
    lastname: '',
    gender: '',
    joinDate: '',
    aboutMe: '',
    email: '',
    skills: [],
    role: {id: '', name: '', privilege: Privilege.User},
    password: '',
    project: {name: '', id: ''},
    department: {name: '', id: ''}
  };
  id: string = '';
  avatarFile: File | null = null;
  avatarPreview: string | null = null;
  avatarPreviewEp: string | null = null;
  user: any = {}
  isUserAuthorize: boolean = false;

  passwordRepeat: string ='';

  constructor(
    private employeeService: ServiceService,
    private projectService: ProjectServiceService,
    private departmentService: DepartmentServiceService,
    private roleSerivce: RoleSerivceService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  onFileSelect(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file, file.name);
      this.http.post<UploadResponse>('http://localhost:3000/upload-picture/upload', formData).subscribe(
        (response) => {
          this.employee.avatar = response.filename;
          this.avatarPreview = `http://localhost:3000/upload-picture/${response.filename}`;
        }
      );
    }
  }

  validateUser(){
    const userData = sessionStorage.getItem('User');
    if(userData)
    {
      this.user = JSON.parse(userData)
      return true
    }
    return false
  }

  onFileSelectEP(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file, file.name);
      this.http.post<UploadResponse>('http://localhost:3000/upload-picture/upload', formData).subscribe(
        (response) => {
          this.employee.aboutMe = response.filename;
          this.avatarPreviewEp = `http://localhost:3000/upload-picture/${response.filename}`;
        }
      );
    }
  }

  ngOnInit(): void {
    this.loadProject();
    this.loadDepartment();
    this.loadRole();
    this.validateUser();
    console.log(this.user);
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
      if (this.user.sub.role.privilege === 'user' && this.user.sub.id !== id){
        this.handleUnauthorizedAccess()
      }
      else{
        this.isUserAuthorize = true;
        this.employeeService.getEmployee(id).subscribe(
          (data) => {
            this.employee = data;
            console.log("Employee Join Date is : ",this.employee.joinDate)
            if (this.employee.joinDate)
            {
              this.employee.joinDate = new Date(Number(this.employee.joinDate)).toISOString().split('T')[0];

            }
            console.log("Employee join Date after convert to string is : ",this.employee.joinDate)
            if (!this.employee.project){
              this.employee.project = {id: '',name: ''};
            }
            this.id = id
          }
        )
      }
    }
  }
  updateEmployee(): void {
    this.employeeService.updateEmployeeWithApiCall(this.id, this.employee).subscribe(
      (data : Employee) => {
        console.log("join Date is : ",data.joinDate)
        this.router.navigate(['/admin/employee']);
      }
    );
  }

  loadRole():void {
    this.roleSerivce.getRoles().subscribe(
      (rolesData) => {
        this.roles = rolesData
      }
    )
  }
  loadProject(): void {
    this.projectService.getProjectsWithApiCall().subscribe(
      (projectData) => {
        this.projects = projectData;
      }
    );
  }

  loadDepartment(): void {
    this.departmentService.getDepartments().subscribe(
      (departmentData) => {
        this.departments = departmentData;
      }
    );
  }

  handleUnauthorizedAccess():void {
    console.log("Unauthorized-401");
    this.router.navigate([])
  }

}
