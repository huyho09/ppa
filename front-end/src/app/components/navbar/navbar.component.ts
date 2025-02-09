import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../login/login-service.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  constructor (private loginService: LoginServiceService){}

  user: any = {}
  ngOnInit(): void {
    if (this.user)
    {
      this.user = this.loginService.getSession()
    }
  }
  activeMenu: string | null = null;

  toggleSubmenu(menu: string): void {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }
  logout(event: Event){
    event.preventDefault()
    sessionStorage.removeItem('JwtToken')
    window.location.href = '/login'
  }
}
