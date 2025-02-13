import { Component, OnInit } from '@angular/core';
import { RoleServiceService } from '../service/role-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

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
  selector: 'app-role-delete',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './role-delete.component.html',
  styleUrl: './role-delete.component.scss'
})
export class RoleDeleteComponent implements OnInit {
  constructor(
    private roleService: RoleServiceService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  role: Role = {
    id: '',
    name: '',
    privilege: Privilege.User
  }
  id: string = ''

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      if(id)
      {
        this.roleService.getRoleWithApiCall(id).subscribe(
          (data) =>
          {
            this.role = data
            this.roleService.deleteRoleWithApiCall(this.role.id).subscribe(
              () => {
                this.router.navigate(['/dashboard/role'])
              }
            )
          }
        )
      }
  }

}
