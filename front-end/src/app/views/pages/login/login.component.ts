import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CacheService } from '../../../services/cache.service';
import {  } from '@coreui/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [ CommonModule,FormsModule]
})
export class LoginComponent {
  constructor(private router:Router, private authService: CacheService){}
  username: string ='';
  password: string ='';
  showError: string = '';
  ngOnInit(): void { }
  ngAfterViewInit(): void {
    if (this.authService.getUserData('currentUserId')) {
      this.router.navigate(['/home']);
    }
  }
  onSubmit(): void
  {
    this.showError = ''
    if(this.username === 'admin@gmail.com' && this.password === 'Password@123')
    {
      // Save user identifier in storage
      this.authService.saveUserData('currentUserId', 'admin@gmail.com');
      this.router.navigate(['/home']);
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
