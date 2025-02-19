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
        this.validateUserExpire()
      },6000)
  }
  validateUserExpire(){
    const user = sessionStorage.getItem('User')
    if (user)
    {
      this.user = JSON.parse(user)
    }
    this.exp_time = new Date(Number(this.user.exp *1000)).toString()
    console.log(this.exp_time)
    this.real_date = new Date().toString()
    if (this.real_date > this.exp_time)
    {
      alert('Session have expire, please log out and log in again')
      this.router.navigate(['/login'])
    }
  }
}
