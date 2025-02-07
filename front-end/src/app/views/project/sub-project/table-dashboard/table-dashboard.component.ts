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
import { FormControl } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import employeesData from '../../../../../data/employee.json'; // Ensure your environment supports JSON imports
import { Employee } from '../../../../dtos/employee-dto';

@Component({
  selector: 'app-table-dashboard',
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, CommonModule, NgxDatatableModule,
    FormsModule, MatSelectModule, MatFormFieldModule, ButtonCloseDirective, ButtonDirective, ModalBodyComponent, ModalComponent,
    ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, ThemeDirective, MatSelectModule, MatCheckboxModule, MatTabsModule],
  templateUrl: './table-dashboard.component.html',
  styleUrl: './table-dashboard.component.scss'
})
export class TableDashboardComponent {
  projects: Project[] = projectsData;
  subProjects: SubProject[] = subProjectsData;
  assignments: Assignment[] = assignmentsData;
  requirements: Requirement[] = requirementsData;
  employees: Employee[] = employeesData;
  currentItemId = 0;
  isEdit: boolean = false;
  selectedOption: string = ''; // Holds the selected radio option

  public subProject: SubProject = {
    SubProjectID: Math.floor(Math.random() * 10000),
    StartTime: "",
    EndTime: "",
    ProjectID: -1,
    AssignmentIDs: [],
    RequirementIDs: []
  }

  // createAssignments: Assignment[] = [
  //   {
  //     AssignmentID: Math.floor(Math.random() * 10000),
  //     EmployeeID: 0,
  //     EmployeeName: '',
  //     RemainingCapacity: 0,
  //     Authority: '',
  //     PMOMonthlyBudget: 0,
  //     PMOTotalBudget: 0
  //   }
  // ];

  // createRequirements: Requirement[] = [
  //   {
  //     RequirementID: Math.floor(Math.random() * 10000),
  //     CategoryName: '',
  //     RequirementType: '',
  //     CompetenceName: '',
  //     CompetenceLevel: '',
  //     Ceftification: ''
  //   }
  // ];

  public visible = false;
  public visible1 = false;
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
  handleLiveDemoChange1(event: any) {
    this.visible1 = event;
  }
  // Function to toggle modal and set data
  toggleLiveDemo(subProjectData?: SubProject) {
    if (subProjectData) {
      var getAssignments: Assignment[] = [];
      subProjectData.AssignmentIDs?.forEach((value: number, element: number) => {
        var assignment = this.assignments.find(m => m.AssignmentID === value);
        if (assignment)
          getAssignments.push(assignment);
      });
      subProjectData.Assignments = getAssignments;
      var getRequirements: Requirement[] = [];
      subProjectData.RequirementIDs?.forEach((value: number, element: number) => {
        var requirement = this.requirements.find(m => m.RequirementID === value);
        if (requirement)
          getRequirements.push(requirement);
      });
      subProjectData.Requirements = getRequirements;
      this.subProject = { ...subProjectData }; // Clone the object to avoid reference issues
    } else {
      this.subProject = { StartTime: '', EndTime: '', ProjectID: 0, Assignments: [], Requirements: [], SubProjectID: Math.floor(Math.random() * 10000) }; // Reset if no data
    }
    this.visible = !this.visible;
  }
  toggleLiveDemo1() {
    this.visible1 = !this.visible1;
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
    console.log(`Changed ${field}:`, inputValue);
  }
  handleSubmit() {
    this.subProjects = [...this.subProjects, this.subProject];
    this.router.navigate(['/project/sub-project/table-dashboard']);
  }
  handleAddAssignment() {
    // Add a new empty row to the assignments array
    this.subProject.Assignments?.push({
      AssignmentID: Math.floor(Math.random() * 10000),
      EmployeeID: 0,
      EmployeeName: '',
      RemainingCapacity: 0,
      Authority: '',
      PMOMonthlyBudget: 0,
      PMOTotalBudget: 0
    });
  }
  // This method is called when the "Delete" button is clicked
  handleDeleteAssignment(index: number) {
    // Remove the assignment at the specified index
    this.subProject.Assignments?.splice(index, 1);
  }
  handleAddRequirement() {
    // Add a new empty row to the Requirement array
    this.subProject.Requirements?.push({
      RequirementID: Math.floor(Math.random() * 10000),
      CategoryName: '',
      RequirementType: '',
      CompetenceName: '',
      CompetenceLevel: '',
      Ceftification: ''
    });
  }
  // This method is called when the "Delete" button is clicked
  handleDeleteRequirement(index: number) {
    // Remove the Requirement at the specified index
    this.subProject.Requirements?.splice(index, 1);
  }

  onDeleteItem(subProjectId: number) {
    const billing = this.subProjects.find(emp => emp.SubProjectID === subProjectId);
    if (billing) {
      this.cdRef.detectChanges();
      this.subProjects = this.subProjects.filter(x => x.SubProjectID !== subProjectId);
    }
    this.visible = false;
  }

  // selectedOptions: string[] = [];

  // toggleSelection(option: string) {
  //   const index = this.selectedOptions.indexOf(option);
  //   if (index === -1) {
  //     this.selectedOptions.push(option);
  //   } else {
  //     this.selectedOptions.splice(index, 1);
  //   }
  // }

  // tabs = [
  //   { label: 'Tab 1', content: 'This is content for Tab 1' },
  //   { label: 'Tab 2', content: 'This is content for Tab 2' }
  // ];

  // addTab() {
  //   const newIndex = this.tabs.length + 1;
  //   this.tabs.push({ label: `Tab ${newIndex}`, content: `This is content for Tab ${newIndex}` });
  // }

  // removeTab(index: number) {
  //   this.tabs.splice(index, 1);
  // }
}
