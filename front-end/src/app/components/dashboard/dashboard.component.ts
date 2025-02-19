import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';  // Import RouterModule
import { NavbarComponent } from '../navbar/navbar.component';
import { TopnavComponent } from "../topnav/topnav.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, NavbarComponent, TopnavComponent],  // Include RouterModule here
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit  {
  user: any = {}
  exp_time: string =''
  real_date: string = '';
  constructor(private router: Router){}
  ngOnInit(): void {
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
