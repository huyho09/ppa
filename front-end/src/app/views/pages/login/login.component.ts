import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle, CommonModule,FormsModule]
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
