import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-employee-index',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './employee-index.component.html',
  styleUrls: ['./employee-index.component.scss']
})
export class EmployeeIndexComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeServiceService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }
}
