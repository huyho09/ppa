import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import employeesData from '../../../../data/employee.json'; // Ensure your environment supports JSON imports
import { Employee } from '../../../dtos/employee-dto';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent,
  TextColorDirective
} from '@coreui/angular';
declare var $: any;

@Component({
    selector: 'app-pending-approvals',
    templateUrl: './pending-approvals.component.html',
    styleUrls: ['./pending-approvals.component.scss'],
    imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent,TextColorDirective, CommonModule, NgxDatatableModule]
})
export class PendingApprovalsComponent {
  employees: Employee[] = employeesData;

  constructor(private cdRef: ChangeDetectorRef) {}

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

  updateStatus(employeeID: number, event: Event | null) {
    const employee = this.employees.find(emp => emp.EmployeeID === employeeID);
    console.log(employee, employeeID);
    if (employee && event?.target) {
      const valueStatus = (event.target as HTMLSelectElement).value;
      employee.Status = valueStatus;
      this.cdRef.detectChanges();
      this.saveEmployeesToLocalStorage();
    }
  }

   // Function to save the employees array to localStorage
   saveEmployeesToLocalStorage() {
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }

  // Function to load the employees array from localStorage
  loadEmployeesFromLocalStorage() {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      this.employees = JSON.parse(storedEmployees);
    }
  }
}
