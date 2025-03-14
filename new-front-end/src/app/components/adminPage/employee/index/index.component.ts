import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Employee {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  aboutMe:string;
  gender: string;
  email: string;
  joinDate:string;
  password:string;
  skills: string[];
  role: {id: string, name: string, privilege: Privilege };
  project: Project;
  department: {id: string, name: string}|null

}
export enum Privilege {
  User = 'user',
  Admin = 'admin',
  SuperAdmin = 'superAdmin'
}

interface Project {
  id: string;
  name: string;
}
@Component({
  selector: 'app-index',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  constructor (private employeeService: ServiceService){}

  employees: Employee[] = []

  ngOnInit(): void {
    const token = sessionStorage.getItem('JwtToken');
    console.log(token)
      this.employeeService.getEmployees().subscribe(
        (data) => {
          this.employees = data
        }
      )
  }

}
