import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../login/login-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.scss'
})
export class TopnavComponent implements OnInit{

  constructor(private loginService : LoginServiceService)
  {}
  user : any = {}
  ngOnInit(): void {
      this.user = this.loginService.getSession()
  }

  loggout(event: Event){
    event.preventDefault()
    sessionStorage.removeItem('JwtToken')
    window.location.href = '/login'
  }
}
