import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
interface Employee {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  email: string;
  birthday: string;
  joinDate:string;
  skills: string;
  role: string;
  is_admin: boolean;
}
@Component({
  selector: 'app-delete',
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  employee: Employee = {
    id: '',
    avatar: '',
    firstname: '',
    lastname: '',
    email: '',
    birthday: '',
    joinDate: '',
    skills: '',
    role: '',
    is_admin: false,
  }
  user: any = {};
  constructor(
    private employeeService: ServiceService,
    private route: ActivatedRoute,
    private router: Router,
  ){}
  ngOnInit(): void {
    const userData = sessionStorage.getItem('User');
    if (userData){
      this.user = JSON.parse(userData)
    }
    const id = this.route.snapshot.paramMap.get('id');
    if(id && this.user.sub.role.privilege === 'superAdmin')
    {
      this.employeeService.deleteEmployeeWithApiCall(id).subscribe(
        () => {
          this.router.navigate(['/admin/employee'])
        }
      )
    }
    else {
      alert("You Don't Have Permission")
      this.router.navigate(['/admin/employee'])
    }
    }
}
