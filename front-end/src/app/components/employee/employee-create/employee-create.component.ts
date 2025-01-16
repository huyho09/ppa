import { Component } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-employee',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
})
export class EmployeeCreateComponent {
  employee = {
    name: '',
    email: '',
    birthday: '',
    role: '',
    skills: '',
    is_admin: false,
  };

  constructor(private employeeService: EmployeeServiceService) {}

  onSubmit() {
    const newEmployee = {
      ...this.employee,
      skills: this.employee.skills.split(',').map((skill) => skill.trim()), 
    };

    this.employeeService.createEmployee(newEmployee).subscribe((response) => {
      console.log('Employee created successfully:', response);
    });
  }
}
