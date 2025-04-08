import { Component, OnInit } from '@angular/core';
import { RoleSerivceService } from '../role-serivce.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RoleCreateComponent } from "../role-create/role-create.component";
import { RouterModule } from '@angular/router';

export enum Privilege{
  SuperAdmin = "superAdmin",
  Admin = "admin",
  User = "user",
}
interface Role {
  id: string,
  name: string
  privilege: Privilege
}

@Component({
  selector: 'app-role-index',
  imports: [FormsModule, CommonModule, RoleCreateComponent,RouterModule],
  templateUrl: './role-index.component.html',
  styleUrl: './role-index.component.css'
})
export class RoleIndexComponent implements OnInit {

  constructor(private roleService: RoleSerivceService){}

  roles: Role[] = []
  isFormVisible: boolean = false

  ngOnInit(): void {
      this.roleService.getRoles().subscribe(
        (data) =>
        {
          this.roles = data
        }
      )
  }

  toggleVisible(): void {
    this.isFormVisible = !this.isFormVisible
    console.log(this.isFormVisible)
  }
}
