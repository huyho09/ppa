import { Component } from '@angular/core';
import { RoleServiceService } from '../service/role-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

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
  selector: 'app-role-create',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './role-create.component.html',
  styleUrl: './role-create.component.scss'
})
export class RoleCreateComponent {
  constructor(
    private roleService: RoleServiceService,
    private router : Router
  ){}
  newrole : Role = {
    id: '',
    name: '',
    privilege: Privilege.User,
  }

  addRole() : void {
    this.roleService.createRoleWithApiCall(this.newrole).subscribe(
      () => {
        this.router.navigate(['/dashboard/role'])
      }
    )
  }

  get privileges(){
    return Object.values(Privilege)
  }


}
