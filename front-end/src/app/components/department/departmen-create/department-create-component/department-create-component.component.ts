import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { DepartmentServiceService } from '../../service/department-service.service';
import { EmployeeServiceService } from '../../../employee/service/employee-service.service';
import { ProjectServiceService } from '../../../project/service/project-service.service';

interface Department {
  id: string,
  name: string,
  overview: string,
  employeesIds: string[],
  createdDate: Date,
}

interface Employees{
  firstname: string,
  lastname: string,
}

interface Projects{
  name: string,
}
@Component({
  selector: 'app-department-create-component',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './department-create-component.component.html',
  styleUrl: './department-create-component.component.scss'
})
export class DepartmentCreateComponentComponent implements OnInit {
  newDepartment: Department = {
    id: '',
    name: '',
    overview: '',
    employeesIds: [],
    createdDate: new Date(),

  }
  departments: Department[] = [];
  employeesIds: Employees[] = [];

  constructor(
    private departmentService: DepartmentServiceService,
    private employeeService: EmployeeServiceService,
    private router: Router,
  ){}
  ngOnInit(): void {
      this.employeeService.getEmployees().subscribe(
        (data) => {
          this.employeesIds = data
        }
      )

  }
  addDepartment() : void {
    this.departmentService.createDepartment(this.newDepartment).subscribe(
      (department) => {
        this.departments.push(department)
        this.router.navigate(['/dashboard/department'])
      }
    )
  }

}
