import { Component, OnInit } from '@angular/core';
import { RoleSerivceService } from '../role-serivce.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
  selector: 'app-role-update',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './role-update.component.html',
  styleUrl: './role-update.component.css'
})
export class RoleUpdateComponent implements OnInit {
  constructor(
    private roleService : RoleSerivceService,
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
        this.roleService.getRole(id).subscribe(
          (data) => {
            this.role = data
            this.id = this.role.id
          }
        )
      }
  }
  updateRole() {
    this.roleService.updateRole(this.id,this.role).subscribe(
      () => {
        alert("Route updated successfully")
        this.route.navigate(['/admin/role'])
      }
    )
  }

  get privileges(){
    return Object.values(Privilege)
  }

}
