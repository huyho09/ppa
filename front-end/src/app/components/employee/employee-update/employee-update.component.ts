import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
interface Employee {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  skills: string[];
  role: string;
  is_admin: boolean;
}

@Component({
  selector: 'app-employee-update',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './employee-update.component.html',
  styleUrl: './employee-update.component.scss'
})
export class EmployeeUpdateComponent implements OnInit {
  employee: Employee = {
    id: '',
    avatar: '',
    firstname: '',
    lastname: '',
    gender: '',
    email: '',
    skills: [],
    role: '',
    is_admin: false,
  }
  id: string =''
  constructor(
    private employeeService: EmployeeServiceService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id)
    {
      this.employeeService.getEmployeeWithApiCall(id).subscribe(
        (data) => {
          this.employee = data
          this.id = id
        }
      )
    }

  }

  updateEmployee(): void
  { this.employeeService.updateEmployeeWithApiCall(this.id,this.employee).subscribe(() =>
    {
      console.log("User edit successfully" + this.employee)
      this.router.navigate(['/dashboard/employee'])
      });
  }
}
