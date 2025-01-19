import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
  selector: 'app-employee-update',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-update.component.html',
  styleUrl: './employee-update.component.scss'
})
export class EmployeeUpdateComponent implements OnInit {
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
    private router: Router
  ){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id)
    {
      const foundEmployee = this.employeeService.getEmployeeById(id)
      if(foundEmployee)
      {
        this.employee = foundEmployee;
      }
      else{
        console.log("Employee not found with id" + id)
      }
    }
  }

  updateEmployee(): void
  { this.employeeService.updateEmployee(this.employee).subscribe(() =>
    {
      console.log("User edit successfully" + this.employee)
      this.router.navigate(['/dashboard/employee'])
      });
  }
}
