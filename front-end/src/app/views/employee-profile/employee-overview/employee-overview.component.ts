import { Component, ChangeDetectorRef } from '@angular/core';
import {
  RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent
} from '@coreui/angular';
import { FormsModule, UntypedFormBuilder } from '@angular/forms';
import employeesData from '../../../../data/employee.json'; // Ensure your environment supports JSON imports
import { Employee } from '../../../dtos/employee-dto';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
declare var $: any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-overview',
  templateUrl: './employee-overview.component.html',
  styleUrls: ['./employee-overview.component.scss'],
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, CommonModule, NgxDatatableModule
    , FormsModule]
})

export class EmployeeOverviewComponent {
  employees: Employee[] = employeesData;
  isEdit: boolean = false;
 
  ngOnInit() {
    // Initialize DataTables on a table element after the view is initialized
    $(document).ready(function () {
      $('#example').dataTable({
        "sScrollX": "100%",
        "sScrollXInner": "110%",
      });
    });
    this.loadEmployeesFromLocalStorage();
  }
  constructor(private formBuilder: UntypedFormBuilder, private cdRef: ChangeDetectorRef, private router: Router) { }

  loadEmployeesFromLocalStorage() {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      this.employees = JSON.parse(storedEmployees);
    } else {
      this.saveEmployeesToLocalStorage
    }
  }

  // Function to save the employees array to localStorage
  saveEmployeesToLocalStorage() {
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }

  onChangeFields(employeeID: number, event: Event | null) {
    const employee = this.employees.find(emp => emp.EmployeeID === employeeID);
    console.log(employee, employeeID);
    if (employee && event?.target) {
      const valueStatus = (event.target as HTMLSelectElement).value;
      employee.Gender = valueStatus == "true" ? true : false;
      this.cdRef.detectChanges();
      this.saveEmployeesToLocalStorage();
    }
  }

  handleCreateEmployee() {
    this.saveEmployeesToLocalStorage();
    this.router.navigate(['/employee-create']);
  }
  
  onEditRecord(){
    this.isEdit = !this.isEdit;
    this.cdRef.detectChanges();
  }
}
