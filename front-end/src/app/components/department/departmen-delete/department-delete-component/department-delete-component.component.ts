import { Component, OnInit } from '@angular/core';
import { DepartmentServiceService } from '../../service/department-service.service';
import { ActivatedRoute, Router } from '@angular/router';

interface Department {
  id: string,
  name: string,
  overview: string,
  employeesIds: string[],
  createdDate: Date,
}


@Component({
  selector: 'app-department-delete-component',
  imports: [],
  templateUrl: './department-delete-component.component.html',
  styleUrl: './department-delete-component.component.scss'
})
export class DepartmentDeleteComponentComponent implements OnInit {

  department: Department = {
    id: '',
    name: '',
    overview: '',
    employeesIds: [],
    createdDate: new Date(),
  }
  constructor(
    private departmentService : DepartmentServiceService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id)
    {
      const deletedDepartment = this.departmentService.getDepartmentById(id)
      this.router.navigate(['/dashboard/department'])
      if (deletedDepartment)
      {
        this.department = deletedDepartment
        this.departmentService.deleteDepartment(deletedDepartment.id).subscribe()
      }

    }

  }

}
