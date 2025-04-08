import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RoleSerivceService } from '../role-serivce.service';
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
  selector: 'app-role-delete',
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './role-delete.component.html',
  styleUrl: './role-delete.component.css'
})
export class RoleDeleteComponent implements OnInit {

  constructor(private roleService: RoleSerivceService,public router: Router, private route: ActivatedRoute){}

  id: string = ''
  role: Role = {
    id:  '',
    name: '',
    privilege: Privilege.User
  }
  showConfirmation: boolean = true;

  ngOnInit(): void {
    this.getRoleInfo()
  }

  getRoleInfo(){
    const id = this.route.snapshot.paramMap.get('id')
    if (id){
      this.roleService.getRole(id).subscribe(
        (data) =>{
          this.role = data
          this.id = this.role.id
        }
      )
      return true
    }
    return false
  }
  deletedRole(){
    this.roleService.deleteRole(this.id).subscribe(
      () => {
        this.router.navigate(['/admin/role'])
      }
    )
  }
}
