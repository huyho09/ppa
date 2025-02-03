import { Component, ChangeDetectorRef } from '@angular/core';
import {
  RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent
} from '@coreui/angular';
import { FormsModule, UntypedFormBuilder } from '@angular/forms';
import { Project, ProjectStatusEnum, WorkingModelEnum, ContractTypeEnum, BillingMethodEnum, BillingFrequencyEnum } from '../../../../dtos/project.dto';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
declare var $: any;
import { Router } from '@angular/router';
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import projectsData from '../../../../../data/project.json'; // Ensure your environment supports JSON imports
import subProjectsData from '../../../../../data/sub-project.json'; // Ensure your environment supports JSON imports
import assignmentsData from '../../../../../data/assignment.json'; // Ensure your environment supports JSON imports
import requirementsData from '../../../../../data/requirement.json'; // Ensure your environment supports JSON imports
import { SubProject } from '../../../../dtos/sub-project'
import { Assignment } from '../../../../dtos/assignment-dto'
import { Requirement } from '../../../../dtos/requirement-dto'

@Component({
  selector: 'app-table-dashboard',
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, CommonModule, NgxDatatableModule
    , FormsModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './table-dashboard.component.html',
  styleUrl: './table-dashboard.component.scss'
})
export class TableDashboardComponent {
  projects: Project[] = projectsData;
  subProjects: SubProject[] = subProjectsData;
  assignments: Assignment[] = assignmentsData;
  requirements: Requirement[] = requirementsData;
  constructor(private formBuilder: UntypedFormBuilder, private cdRef: ChangeDetectorRef, private router: Router) { }
  ngOnInit() {
    // Initialize DataTables on a table element after the view is initialized
    $(document).ready(function () {
      $('#example').dataTable({
        "sScrollX": "100%",
        "sScrollXInner": "110%",
      });
    });
  }
}
