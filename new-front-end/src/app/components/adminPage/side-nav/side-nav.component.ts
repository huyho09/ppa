import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-side-nav',
  imports: [RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit  {
  constructor(private route: Router) {}

  user: any = {}

  ngOnInit(): void {
      const userData = sessionStorage.getItem('User')
      if (userData) {
        this.user = JSON.parse(userData)
      }
  }
}
