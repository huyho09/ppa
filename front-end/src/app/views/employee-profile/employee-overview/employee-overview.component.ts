import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent
} from '@coreui/angular';
import employeesData from '../../../../data/employee.json'; // Ensure your environment supports JSON imports
import { Employee } from '../../../dtos/employee-dto';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
declare var $: any;

@Component({
  selector: 'app-employee-overview',
  templateUrl: './employee-overview.component.html',
  styleUrls: ['./employee-overview.component.scss'],
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, CommonModule, NgxDatatableModule
  ]
})

export class EmployeeOverviewComponent {
  employees: Employee[] = employeesData;
  constructor(
    private sanitizer: DomSanitizer
  ) { }

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

  loadEmployeesFromLocalStorage() {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      this.employees = JSON.parse(storedEmployees);
    }
  }

}
