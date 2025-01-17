import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  activeMenu: string | null = null;

  toggleSubmenu(menu: string): void {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }
}
