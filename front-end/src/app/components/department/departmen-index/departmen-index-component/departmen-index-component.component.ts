import { Component, OnInit } from '@angular/core';
import { DepartmentServiceService } from '../../service/department-service.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Department {
  id: string,
  name: string,
  overview: string,
  employeesIds: string[],
  createdDate: Date,
}

@Component({
  selector: 'app-departmen-index-component',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './departmen-index-component.component.html',
  styleUrl: './departmen-index-component.component.scss'
})
export class DepartmenIndexComponentComponent implements OnInit {
  departments: Department[] = []
  currentOverview: string = '';
  isFormVisible: boolean = false;
  constructor(
    private departmentService: DepartmentServiceService,
   ){}
   ngOnInit(): void {
       this.departmentService.getDepartments().subscribe(
       (data) => {
        this.departments = data;
       }
       )
   }
   showForm(overview: string) : void{
    this.currentOverview = overview
    this.isFormVisible = !this.isFormVisible
    if (this.isFormVisible == true)
    {
      console.log('form is open')
    }
    else
    {
      console.log('form is closed')
    }
  }
}
