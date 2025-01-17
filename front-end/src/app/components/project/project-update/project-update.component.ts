import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from '../service/project-service.service';
import { ActivatedRoute,Route,Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeServiceService } from '../../employee/service/employee-service.service';
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
interface Employee{
    firstname: '',
    lastname: '',
    role: '',
}
@Component({
  selector: 'app-project-update',
  standalone:true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './project-update.component.html',
  styleUrl: './project-update.component.scss'
})
export class ProjectUpdateComponent implements OnInit {
constructor(
  private projectService: ProjectServiceService,
  private employeeService: EmployeeServiceService,
  private route: ActivatedRoute,
  private router: Router
){}
employees: Employee[] = []
project : Project = {
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
ngOnInit(): void {
    this.loadEmployees()
    this.employeeService.getEmployeesFromLocalStorage()
    const id = this.route.snapshot.paramMap.get('id')
    if(id)
    {
      const foundProject = this.projectService.getProjectById(id)
      if (foundProject)
      {
        this.project = foundProject;
      }
      else
      {
        console.log('project not found')
      }
    }

}
loadEmployees()
{
  this.employeeService.getEmployees().subscribe((data) =>
  {
    this.employees = data

  })
}
updateProject() {
  this.projectService.updateProject(this.project).subscribe()
}

}
