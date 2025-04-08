import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DepartmentServiceService } from '../department-service.service';

interface Department {
  id: string,
  name: string,
  overview: string,
  createdAt: string,
}

@Component({
  selector: 'app-department-update',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './department-update.component.html',
  styleUrl: './department-update.component.css'
})
export class DepartmentUpdateComponent implements OnInit {

  constructor(private departmentService: DepartmentServiceService, private router: Router, private route: ActivatedRoute) {}

  updateDep: Department = {
    id: '',
    name: '',
    overview: '',
    createdAt: '',
  }

  id: string = ''

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      if (id)
      {
        this.departmentService.getDepartment(id).subscribe(
          (data) => {
            this.updateDep = data
            this.updateDep.createdAt = new Date(Number(this.updateDep.createdAt)).toString()
            this.id = data.id
          }
        )
      }
  }

  updateDepartment(): void{
    this.departmentService.updateDepartment(this.updateDep,this.id).subscribe(
      () => {
        alert("Department update Succesfully")
        this.router.navigate(['./department'])
      }
    )
  }

}
