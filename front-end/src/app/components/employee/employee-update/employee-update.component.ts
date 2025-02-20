import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProjectServiceService } from '../../project/service/project-service.service';
import { HttpClient } from '@angular/common/http';
import { DepartmentServiceService } from '../../department/service/department-service.service';
import { Privilege, RoleServiceService } from '../../role/service/role-service.service';

interface Employee {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  aboutMe:string;
  gender: string;
  email: string;
  password:string;
  skills: string[];
  role: {id: string, name: string, privilege: Privilege };
  is_admin: boolean;
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
  selector: 'app-employee-update',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit, OnDestroy {
  projects: { id: string; name: string }[] = [];
  departments: {id: string; name: string}[] = [];
  roles: {id: string; name:string ; privilege: Privilege}[] = []

  employee: Employee = {
    id: '',
    avatar: '',
    firstname: '',
    lastname: '',
    gender: '',
    aboutMe: '',
    email: '',
    skills: [],
    role: {id: '', name: '', privilege: Privilege.User},
    password: '',
    is_admin: false,
    project: {name: '', id: ''},
    department: {name: '', id: ''}
  };
  id: string = '';
  avatarFile: File | null = null;
  avatarPreview: string | null = null;
  avatarPreviewEp: string | null = null;

  passwordRepeat: string ='';

  constructor(
    private employeeService: EmployeeServiceService,
    private projectService: ProjectServiceService,
    private departmentService: DepartmentServiceService,
    private roleSerivce: RoleServiceService,
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
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService.getEmployeeWithApiCall(id).subscribe(
        (data) => {
          this.employee = data;
          if (!this.employee.project) {
            this.employee.project = {id: '', name: ''};
          }
          this.id = id;
        }
      );
    }
  }

  ngOnDestroy(): void {}

  updateEmployee(): void {
    // if (this.employee.password && this.passwordRepeat !== this.employee.password)
    // {
    //   alert("Password is not match " + this.employee.password + " and" + this.passwordRepeat )
    //   return
    // }
    this.employeeService.updateEmployeeWithApiCall(this.id, this.employee).subscribe(
      (data) => {
        this.router.navigate(['/dashboard/employee']);
      }
    );
  }

  loadRole():void {
    this.roleSerivce.getRolesWithApiCall().subscribe(
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
    this.departmentService.getDepartmentsWithApiCall().subscribe(
      (departmentData) => {
        this.departments = departmentData;
      }
    );
  }
}
