import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeServiceService } from '../components/employee/service/employee-service.service';
interface Employee {
  email: string;
  password:string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(
    private router:Router,
    private employeeService: EmployeeServiceService
  ){}
  username: string ='';
  password: string ='';
  showError: string = '';
  employees: Employee[] = [];
  loginEmail: string = ''
  loginPassword: string = ''

  ngOnInit(): void {
      this.employeeService.getEmployeesWithApiCall().subscribe(
        (data) =>{
          this.employees = data
          console.log(this.employees)
        }
      )
  }
  onSubmit(): void
  {
    this.showError = ''
    if (this.loginEmail === null || this.loginEmail === undefined || this.loginEmail.trim() === '')
    {
      this.showError = 'Please Input Your Email'
      return
    }
    else if ( this.loginPassword === null || this.loginPassword === undefined || this.loginEmail.trim() === '')
    {
      this.showError = 'Please Input Your Password'
      return
    }
    else if (this.loginEmail && this.loginPassword)
    {
      this.employees.map(
        (emp) => {
          if (emp.email === this.loginEmail)
          {
            this.router.navigate(['/dashboard'])
          }
          else
          {
            this.showError = "Invalid Login"
            return
          }
        }
      )
    }
  }
}
