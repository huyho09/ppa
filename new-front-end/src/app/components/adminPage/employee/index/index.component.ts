import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

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

interface EmailSender{
  send_to: string;
  content: string;
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
  standalone: true,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  constructor (private employeeService: ServiceService, private router: Router){}
  searchText: string = ''
  employees: Employee[] = []
  newmail: EmailSender = {
    send_to: '',
    content: ''
  }
  selectedEmail: string = ''
  ngOnInit(): void {
    const token = sessionStorage.getItem('JwtToken');
    console.log(token)
      this.employeeService.getEmployees().subscribe(
        (data) => {
          this.employees = data
        }
      )
  }
  filterEmployee(): Employee[] {
    return this.employees.filter(employee => {
      const searchMatch = this.isEmployeeMatch(employee, this.searchText.toLowerCase().trim());

      return searchMatch
    });
  }
  isEmployeeMatch(employee: Employee, search: string): boolean {
    if (!search) return true;

    for (let key in employee) {
      const value = employee[key as keyof Employee];
      if (typeof value === 'string' && value.toLowerCase().includes(search)) {
        return true;
      } else if (Array.isArray(value)) {
        if (value.some(item => item.toLowerCase().includes(search))) {
          return true;
        }
      }
    }
    return false;
  }
  sendEmail():void{
    this.newmail.send_to = this.selectedEmail
    this.employeeService.sendEmail(this.newmail).subscribe(
      (data) => {
        console.log(data)
        window.alert("Message create Successfully, please check Downloads Folder")
      }
    )
  }


}
