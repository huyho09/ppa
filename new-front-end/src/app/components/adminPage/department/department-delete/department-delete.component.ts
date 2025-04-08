import { Component, OnInit } from '@angular/core';
import { DepartmentServiceService } from '../department-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-delete',
  imports: [],
  templateUrl: './department-delete.component.html',
  styleUrl: './department-delete.component.css'
})
export class DepartmentDeleteComponent implements OnInit {
  constructor (private departmentService: DepartmentServiceService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      if(id) {
        this.departmentService.deleteDepartment(id).subscribe(
          () => {
            this.router.navigate(['admin/department'])
          },

        )
      }
  }

}
