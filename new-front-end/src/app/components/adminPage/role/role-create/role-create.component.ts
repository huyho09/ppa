import { Component } from '@angular/core';
import { RoleSerivceService } from '../role-serivce.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  selector: 'app-role-create',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './role-create.component.html',
  styleUrl: './role-create.component.css'
})
export class RoleCreateComponent {
  constructor (private roleService: RoleSerivceService,private router: Router){}

  newRole: Role = {
    id: '',
    name: '',
    privilege: Privilege.User
  }

  addRole():void {
    this.roleService.createRole(this.newRole).subscribe(
      () => {
        this.router.navigate(['/admin/role'])
      }
    )
  }

  get privileges(){
    return Object.values(Privilege)
  }

}
