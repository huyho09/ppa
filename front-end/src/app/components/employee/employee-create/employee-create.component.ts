import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Employee {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  email: string;
  birthday: string;
  skills: string;
  role: string;
  is_admin: boolean;
}

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
})
export class EmployeeCreateComponent {
  employees: Employee[] = [];
  newEmployee = {
    id: '',
    avatar: '',
    firstname: '',
    lastname: '',
    email: '',
    birthday: '',
    skills: '',
    role: '',
    is_admin: false,
  };

  constructor(private employeeService: EmployeeServiceService) {}

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
          is_admin: false,
        };
      });
  }

  downloadJSON(): void {
    const employees = this.employeeService.getEmployeesFromLocalStorage();
    const json = JSON.stringify(employees, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'employees.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
