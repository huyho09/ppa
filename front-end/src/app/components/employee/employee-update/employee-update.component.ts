import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProjectServiceService } from '../../project/service/project-service.service';
interface Employee {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  skills: string[];
  role: string;
  is_admin: boolean;
  project: {name: string, id:string}
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
  employee: Employee = {
    id: '',
    avatar: '',
    firstname: '',
    lastname: '',
    gender: '',
    email: '',
    skills: [],
    role: '',
    is_admin: false,
    project: {name: '', id: ''},
  }
  id: string =''
  constructor(
    private employeeService: EmployeeServiceService,
    private projectService: ProjectServiceService,
    private route: ActivatedRoute,
    private router: Router
  ){}

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
