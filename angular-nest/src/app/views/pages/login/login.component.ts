import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router:Router){}
  username: string ='';
  password: string ='';
  showError: string = '';
  onSubmit(): void
  {
    this.showError = ''
    if(this.username === 'admin@gmail.com' && this.password === 'Password@123')
    {
      this.router.navigate(['/dashboard']);
    }
    else if (this.username === null || this.username === undefined || this.username.trim()==='')
    {
      this.showError = 'Username is required';
      return;
    }
    else if (this.password === null || this.password === undefined || this.password.trim()==='')
    {
      this.showError = 'Password is required';
      return;
    }
    else
    {
      this.showError = 'Invalid login, please check ';
      return;
    }
  }
}
