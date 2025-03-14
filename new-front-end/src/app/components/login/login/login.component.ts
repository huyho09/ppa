import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { LoginServiceService } from '../service/login.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private router: Router,
    private loginService : LoginServiceService,
    private http: HttpClient
  ){}
  email: string = ''
  password: string = ''
  showError: string = ''

  onSubmit(): void
  {

    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        if (this.loginService.saveSession(response) && this.loginService.getSession()){
          this.router.navigate(['/admin'])
        }
      }
    )
  }
}
