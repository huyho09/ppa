import { Component, OnInit } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { EmployeeServiceService } from '../employee/service/employee-service.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Privilege } from '../role/service/role-service.service';
import { EmployeeIndexComponent } from "../employee/employee-index/employee-index.component";

interface Employee {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  aboutMe:string;
  gender: string;
  email: string;
  password:string;
  skills: string[];
  role: {id: string, name: string, privilege: Privilege };
  is_admin: boolean;
  project: Project;
  department: {id: string, name: string}|null

}

interface Project {
  id: string;
  name: string;
}

@Component({
  selector: 'app-expert-profile',
  standalone: true,
  imports: [QuillModule, RouterModule, CommonModule, FormsModule, EmployeeIndexComponent],
  templateUrl: './expert-profile.component.html',
  styleUrl: './expert-profile.component.scss'
})
export class ExpertProfileComponent implements OnInit {
  constructor (
    private employeeService:EmployeeServiceService,
    private route: ActivatedRoute
  )
  {}
  employee: Employee = {
    id: '',
    avatar: '',
    firstname: '',
    lastname: '',
    gender: '',
    aboutMe: '',
    password: '',
    email: '',
    skills: [],
    role: {id: '', name: '', privilege: Privilege.User},
    is_admin: false,
    project: {name: '', id: ''},
    department: {name: '', id: ''}
  };
  id: string = ''
  ngOnInit(): void {
    const id  = this.route.snapshot.paramMap.get('id')
    if (id)
    {
      this.employeeService.getEmployeeWithApiCall(id).subscribe(
        (data) => {
          this.employee = data
        }
      )
    }
  }
}
