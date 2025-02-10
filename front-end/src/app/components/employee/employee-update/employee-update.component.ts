import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProjectServiceService } from '../../project/service/project-service.service';
import { HttpClient } from '@angular/common/http';
interface Employee {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  skills: string[];
  role: string;
  password: string;
  is_admin: boolean;
  project: {name: string, id:string} |null
  department:{name:string, id:string} | null
}
interface UploadResponse {
  message: string;
  filename: string;
}
@Component({
  selector: 'app-employee-update',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './employee-update.component.html',
  styleUrl: './employee-update.component.scss'
})
export class EmployeeUpdateComponent implements OnInit {
  projects: { id: string; name: string }[] = [];
  departments: {id: string; name: string}[] = []
  employee: Employee = {
    id: '',
    avatar: '',
    firstname: '',
    lastname: '',
    gender: '',
    email: '',
    skills: [],
    role: '',
    password: '',
    is_admin: false,
    project: {name: '', id: ''},
    department: {name: '',id: ''}
  }
  id: string =''
  avatarFile: File | null = null
  avatarPreview: string | null = null

  constructor(
    private employeeService: EmployeeServiceService,
    private projectService: ProjectServiceService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ){}

  onFileSelect(event: any): void {
    const file:File = event.target.files[0];
    if(file){
      const formData = new FormData();
      formData.append('file',file,file.name)
      this.http.post<UploadResponse>('http://localhost:3000/upload-picture/upload', formData).subscribe(
        (response) => {
          console.log(response)
          this.employee.avatar = response.filename
          console.log(this.employee.avatar)
          this.avatarPreview = `http://localhost:3000/upload-picture/${response.filename}`
        }
      )
    }
  }
  ngOnInit(): void {
    this.loadProject()
    const id = this.route.snapshot.paramMap.get('id');
    if(id)
    {
      this.employeeService.getEmployeeWithApiCall(id).subscribe(
        (data) => {
          this.employee = data
          if (!this.employee.project)
          {
            this.employee.project = {id: '', name: ''}
            this.employee.department = {id: '',name: ''}
          }
          this.id = id
        }
      )
    }

  }
  updateEmployee(): void
  { this.employeeService.updateEmployeeWithApiCall(this.id,this.employee).subscribe(() =>
    {
      this.router.navigate(['/dashboard/employee'])
      });
  }
  loadProject(){
    this.projectService.getProjectsWithApiCall().subscribe(
      (projectData)=> {
        this.projects = projectData
      }
    )
  }
}
