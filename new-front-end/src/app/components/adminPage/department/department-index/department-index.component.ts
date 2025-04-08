import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DepartmentServiceService } from '../department-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface Department{
  id: string,
  name: string,
  overview: string,
  createdAt: string,
}
@Component({
  selector: 'app-department-index',
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './department-index.component.html',
  styleUrl: './department-index.component.css'
})
export class DepartmentIndexComponent implements OnInit {
  constructor(private departmentService: DepartmentServiceService) {}

  departments: Department[] = []

  ngOnInit(): void {
      this.departmentService.getDepartments().subscribe(
        (data) => {
          this.departments = data.map(
            department => ({
              ...department,
              createdAt: new Date(Number(department.createdAt)).toString()

            })
          )

        }
      )
  }
}
