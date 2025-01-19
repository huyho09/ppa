import { Component } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';
interface Employee {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  email: string;
  birthday: string;
  skills: string;
  role: string;
  is_admin: boolean;
}
@Component({
  selector: 'app-employee-delete',
  imports: [],
  templateUrl: './employee-delete.component.html',
  styleUrl: './employee-delete.component.scss'
})
export class EmployeeDeleteComponent {
  employee: Employee = {
    id: '',
    avatar: '',
    firstname: '',
    lastname: '',
    email: '',
    birthday: '',
    skills: '',
    role: '',
    is_admin: false,
  }
  constructor(
    private employeeService: EmployeeServiceService,
    private route: ActivatedRoute,
    private router: Router,
  ){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id)
    {
      const deletedEmployee = this.employeeService.getEmployeeById(id)
      this.router.navigate(['dashboard/employee'])
      if(deletedEmployee)
      {
        this.employee = deletedEmployee;
        this.employeeService.deleteEmployee(deletedEmployee.id).subscribe(() =>
          {
            });
      }
      else{
        console.log("Employee not found with id" + id)
      }
    }
    }

}
