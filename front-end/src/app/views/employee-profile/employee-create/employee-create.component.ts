import { Component } from '@angular/core';
import { Employee } from '../../../dtos/employee-dto';
import { CommonModule } from '@angular/common';
import {
  RowComponent, ColComponent,
} from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  imports: [CommonModule, RowComponent, ColComponent, FormsModule],
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.scss'
})

export class EmployeeCreateComponent {
  employee: Employee = {
    EmployeeID: 0,
    NTID: "",
    EmployeeName: "",
    DOB: "",
    Gender: true,
    Team: "",
    EmployeeLevel: 0,
    SOJoinedDate: "",
    BoschJoinedDate: "",
    ResourceType: "Internal",
    TotalYearExperienceBeforeBosch: 0,
    Status: "",
    DeactivationReason: "",
    LastWorkingDate: "",
    TerminationDate: "",
    MaternityEndDate: "",
    Remarks: "",
    MaternityStartDate: ""
  };

   constructor(private router: Router) { }
  onChange(field: string, event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    console.log('Current form data:', this.employee);
  }
  handleCancel(){
    this.router.navigate(['/employee-profile/employee-overview']);
  }
  handleSubmit(){
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      var employees : Employee[]  = JSON.parse(storedEmployees);
      employees = [...employees, this.employee];
      localStorage.setItem('employees', JSON.stringify(employees));
    }
    this.router.navigate(['/employee-profile/employee-overview']);
  }
}
