import { Component } from '@angular/core';
import { DepartmentServiceService } from '../department-service.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Department{
  id: string,
  name: string,
  overview: string,
  createdAt: string
}
@Component({
  selector: 'app-department-create',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './department-create.component.html',
  styleUrl: './department-create.component.css'
})
export class DepartmentCreateComponent {
  constructor (private departmentService: DepartmentServiceService,
               private router: Router,
  ){}
  newDep: Department = {
    id: '',
    name: '',
    overview: '',
    createdAt: ''
  }
  newDate = new Date()

  addDep(): void {
    this.newDep.createdAt = this.newDate.getTime().toString()
    this.departmentService.createDepartment(this.newDep).subscribe(
      () => {
        this.router.navigate(['admin/department'])
        alert("Department have been successfully created")
      }
    )
  }
}
