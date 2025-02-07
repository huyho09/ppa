import { Component, ChangeDetectorRef } from '@angular/core';
import {
  RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, ButtonCloseDirective,
  ButtonDirective, ModalBodyComponent, ModalComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, ThemeDirective
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
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, CommonModule, NgxDatatableModule,
    FormsModule, MatSelectModule, MatFormFieldModule, ButtonCloseDirective, ButtonDirective, ModalBodyComponent, ModalComponent, 
    ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, ThemeDirective, MatSelectModule],
  templateUrl: './table-dashboard.component.html',
  styleUrl: './table-dashboard.component.scss'
})
export class TableDashboardComponent {
  projects: Project[] = projectsData;
  subProjects: SubProject[] = subProjectsData;
  assignments: Assignment[] = assignmentsData;
  requirements: Requirement[] = requirementsData;
  currentItemId = 0;
  isEdit: boolean = false;
  public subProject: SubProject = {
    SubProjectID: Math.floor(Math.random() * 10000),
    StartTime: "",
    EndTime: "",
    ProjectID: -1,
    AssignmentIDs: [],
    RequirementIDs: []
  }


  public visible = false;
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
  handleLiveDemoChange(event: any) {
    this.visible = event;
  }
  toggleLiveDemo() {
    this.visible = !this.visible;
  }
  onChangeFields(subProjectID: number, event: Event | null) {
    const billing = this.subProjects.find(sub => sub.SubProjectID === subProjectID);
    if (billing && event?.target) {
      this.cdRef.detectChanges();
      // this.saveBillingsToLocalStorage();
    }
  }
  onEditRecord() {
    this.isEdit = !this.isEdit;
    this.cdRef.detectChanges();
  }
  onChange(field: string, event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    console.log('Current form data:', this.subProject);
  }
  handleSubmit() {
    this.subProjects = [...this.subProjects, this.subProject];
    this.router.navigate(['/project/client-overview']);
  }
  selectedItems: string[] = []; // Stores selected values

  options = [
    { id: '1', name: 'Option 1' },
    { id: '2', name: 'Option 2' },
    { id: '3', name: 'Option 3' },
   { id: '4', name: 'Option 4' }
  ];
}
