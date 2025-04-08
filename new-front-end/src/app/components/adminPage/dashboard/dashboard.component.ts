import { Component } from '@angular/core';
import { SideNavComponent } from "../side-nav/side-nav.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [SideNavComponent,FormsModule,CommonModule,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  user: any = {}
  exp_time: string =''
  real_date: string = '';
  isCollapsed: boolean = false
  isDashboardPage: boolean = false
  constructor(
    private router: Router,
  ){
  }
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
        const expDate = new Date(this.user.exp * 1000);
        const currentDate = new Date();

        this.exp_time = expDate.toString();
        this.real_date = currentDate.toString();


        if (currentDate >= expDate) {
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
