import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from '../service/project-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {Chart} from 'chart.js/auto'
import { CustomerServiceService } from '../../customer/service/customer-service.service';
import { DepartmentServiceService } from '../../department/service/department-service.service';
interface Employee {
  id: string;
  firstname: string;
  lastname: string;
}

interface Project {
  id: string;
  name: string;
  requirements: string;
  skills: string[];
  result_image: string[];
  project_start_date: string;
  project_end_date: string;
  lastUpdatedat: string;
  department: Department;
  customer: Customer;
  createdAt : string;
  endAt: string;
}

interface Department {
  id: string;
  name: string;
}

interface Customer {
  id: string;
  firstname: string;
  lastname: string;
}

interface ProjectEmployee {
  employeeId: string;
  role_in_project: string;
  task: string;
  effort: number;
}

@Component({
  selector: 'app-project-index',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './project-index.component.html',
  styleUrl: './project-index.component.scss'
})
export class ProjectIndexComponent implements OnInit {

  projects: Project[] = []
  
  isFormVisible: boolean = false
  currentRequirements: string = ''
  todayDate: Date = new Date();
  formatTodayDate: string = this.todayDate.toLocaleDateString('en-CA')
  customers : Customer[] = [];
  departments : Department[] = [];
  customerProject: string = '';
  departmentProject: string = '';
  constructor(
    private projectService: ProjectServiceService,
    private customerService: CustomerServiceService,
    private departmentService : DepartmentServiceService,
  ){}
  getDepartmentName(id: string){
    const departmentName = this.departments.find(department => department.id === id)
    return departmentName?.name
  }
  getCustomerName(id: string) {
    const customerName = this.customers.find(customer => customer.id === id)
    return customerName?.firstname + " " + customerName?.lastname
  }
  ngOnInit(): void {
      this.projectService.getProjectsWithApiCall().subscribe(
        (data) => {
          this.projects = data.map(project => ({
            ...project,
            createdAt: new Date(Number(project.project_start_date)).toLocaleDateString(),
            endAt: new Date(Number(project.project_end_date)).toLocaleDateString()
            
          }))
        }
        
      )
      this.customerService.getCustomersWithApiCall().subscribe(
        (customersData) => {
          this.customers = customersData
        }
      )
      this.departmentService.getDepartmentsWithApiCall().subscribe(
        (departmentsData) => {
          this.departments = departmentsData
        }
      )
  }

showForm(requirements: string) : void{
  this.currentRequirements = requirements
  this.isFormVisible = !this.isFormVisible
  if (this.isFormVisible == true)
  {
    console.log(this.todayDate)
  }
  else
  {
    console.log('form is closed')
  }
}


}
