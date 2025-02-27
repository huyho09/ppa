import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';  // Import RouterModule
import { NavbarComponent } from '../navbar/navbar.component';
import { TopnavComponent } from "../topnav/topnav.component";
import { DepartmentDescribeComponent } from "../../department-describe/department-describe.component";
import { EmployeeDeleteComponent } from "../employee/employee-delete/employee-delete.component";
import { EmployeeIndexComponent } from "../employee/employee-index/employee-index.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarServiceService } from '../navbar/service/navbar-service.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, NavbarComponent, TopnavComponent,FormsModule,CommonModule],  // Include RouterModule here
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit  {
  user: any = {}
  exp_time: string =''
  real_date: string = '';
  isCollapsed: boolean = false

  constructor(
    private router: Router,
    private sidenavService: NavbarServiceService

  ){}
  ngOnInit(): void {
    this.sidenavService.sidenavCollapsed$.subscribe(
      collapsed => {
        this.isCollapsed = collapsed
      }
    )
    setInterval(() => {
      this.validateUserExpire();
    }, 6000);
  }

  validateUserExpire() {
    const user = sessionStorage.getItem('User');

    if (user) {
      this.user = JSON.parse(user);

      if (this.user.exp) {
        const expDate = new Date(this.user.exp * 1000); // JWT exp is in seconds
        const currentDate = new Date();

        this.exp_time = expDate.toString();
        this.real_date = currentDate.toString();

        console.log(`Expiration Time: ${this.exp_time}`);
        console.log(`Current Time: ${this.real_date}`);

        if (currentDate >= expDate) {
          alert('Session has expired, please log out and log in again');
          this.router.navigate(['/login']);
        }
      } else {
        console.warn('No expiration time found in user object.');
      }
    } else {
      console.warn('No user found in sessionStorage.');
    }
  }

}
