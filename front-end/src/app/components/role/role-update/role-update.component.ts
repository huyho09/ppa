import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
  selector: 'app-role-update',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './role-update.component.html',
  styleUrl: './role-update.component.scss'
})
export class RoleUpdateComponent implements OnInit {
  constructor(
    private roleService : RoleServiceService,
    private router : ActivatedRoute,
    private route : Router
  ){}

  role: Role = {
    id: '',
    name: '',
    privilege: Privilege.User
  }
  id: string = ''

  ngOnInit(): void {
      const id = this.router.snapshot.paramMap.get('id')
      if (id) {
        this.roleService.getRoleWithApiCall(id).subscribe(
          (data) => {
            this.role = data
            this.id = this.role.id
          }
        )
      }
  }
  updateRole() {
    this.roleService.updateRoleWithApiCall(this.id,this.role).subscribe(
      () => {
        this.route.navigate(['/dashboard/role'])
      }
    )
  }

  get privileges(){
    return Object.values(Privilege)
  }
}
