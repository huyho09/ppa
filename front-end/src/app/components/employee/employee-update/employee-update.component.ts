import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentServiceService } from '../../department/service/department-service.service';
interface Employee {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  email: string;
  birthday: string;
  skills: string;
  role: string;
  department: string;
  is_admin: boolean;
}
interface Department {
  name: string
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
    department: '',
    is_admin: false,
  }
  constructor(
    private employeeService: EmployeeServiceService,
    private departmentService: DepartmentServiceService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  departments: Department[] = [];
  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(
      (data) => {
        this.departments = data;
      }
    )
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
