import { Component, OnInit } from '@angular/core';
import { DepartmentServiceService } from '../../service/department-service.service';
import { EmployeeServiceService } from '../../../employee/service/employee-service.service';
import { ActivatedRoute,Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Department {
  id: string,
  name: string,
  overview: string,
  employeesIds: string[],
  createdDate: Date,
}
interface Employee {
  firstname: string,
  lastname: string,
}

@Component({
  selector: 'app-department-update-component',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './department-update-component.component.html',
  styleUrl: './department-update-component.component.scss'
})
export class DepartmentUpdateComponentComponent implements OnInit {
  constructor(
    private departmentService: DepartmentServiceService,
    private employeeService: EmployeeServiceService,
    private router: Router,
    private route: ActivatedRoute
  ){
  }
  department: Department = {
    id: '',
    name: '',
    overview: '',
    employeesIds: [],
    createdDate: new Date(),
  }
  employees: Employee[] = []


  ngOnInit(): void {
      this.employeeService.getEmployees().subscribe(
        (data) => {
          this.employees = data
        }
      )
      const id = this.route.snapshot.paramMap.get('id')
      if(id)
      {
        const foundDepartment = this.departmentService.getDepartmentById(id)
        this.department = foundDepartment;
      }
  }
  updateDepartment() {
    this.departmentService.updateDepartment(this.department).subscribe(
      () => {
        this.router.navigate(['/dashboard/department'])
      }
    )
  }
}
