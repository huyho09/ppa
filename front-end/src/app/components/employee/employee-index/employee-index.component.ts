import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';
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
  department: string;
  is_admin: boolean;
}

@Component({
  selector: 'app-employee-index',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './employee-index.component.html',
  styleUrls: ['./employee-index.component.scss']
})
export class EmployeeIndexComponent implements OnInit {
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeServiceService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }


}
