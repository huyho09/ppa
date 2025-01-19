import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, AccordionComponent, AccordionItemComponent,
  TemplateIdDirective, AccordionButtonDirective, BgColorDirective, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective
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
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, AccordionComponent, AccordionItemComponent, TemplateIdDirective, AccordionButtonDirective, BgColorDirective, CommonModule,
    TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, NgxDatatableModule
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
  }

  getAccordionBodyText(value: string | number) {
    const textSample = `
      <strong>This is the <mark>#${value}</mark> item accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as
      the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It&#39;s also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>,
      though the transition does limit overflow.
    `;
    return this.sanitizer.bypassSecurityTrustHtml(textSample);
  }
}
