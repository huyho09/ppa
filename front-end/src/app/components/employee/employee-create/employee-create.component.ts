import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DepartmentServiceService } from '../../department/service/department-service.service';

interface Department {
  name: string,
}

interface Employee {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  email: string;
  birthday: string;
  skills: string;
  role: string;
  department: string;
  is_admin: boolean;
}

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
})
export class EmployeeCreateComponent implements OnInit {
  employees: Employee[] = [];
  departments: Department[] = [];
  newEmployee = {
    id: '',
    avatar: '',
    firstname: '',
    lastname: '',
    email: '',
    birthday: '',
    skills: '',
    role: '',
    department: '',
    is_admin: false,
  };

  constructor(
    private employeeService: EmployeeServiceService,
    private departmentService: DepartmentServiceService,
    private router: Router,
  ) {}

  ngOnInit(): void {
      this.departmentService.getDepartments().subscribe(
        (data) => {
          this.departments = data
        }
      )
  }

  addEmployee(): void {
    this.employeeService
      .createEmployee(this.newEmployee)
      .subscribe((employee) => {
        this.employees.push(employee);
        this.newEmployee = {
          id: '',
          avatar: '',
          firstname: '',
          lastname: '',
          email: '',
          birthday: '',
          skills: '',
          role: '',
          department:'',
          is_admin: false,

        };
        this.router.navigate(['/dashboard/employee'])
      });
  }


}
