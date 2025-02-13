import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RoleServiceService } from '../service/role-service.service';

export enum Privilege {
  User = 'user',
  Admin = 'admin',
  SuperAdmin = 'superAdmin'

}

interface Role {
  id: string;
  name: string;
  privilege: Privilege;
}


@Component({
  selector: 'app-role-index',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './role-index.component.html',
  styleUrl: './role-index.component.scss'
})
export class RoleIndexComponent implements OnInit {
  constructor(private roleService: RoleServiceService){}
roles : Role[] = []

ngOnInit(): void {
    this.roleService.getRolesWithApiCall().subscribe(
      (data) => {
        this.roles = data
      }
    )
}
}
