import { Component, ChangeDetectorRef } from '@angular/core';
import {
  RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent
} from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { Project, ProjectStatusEnum, WorkingModelEnum, ContractTypeEnum, BillingMethodEnum, BillingFrequencyEnum } from '../../../dtos/project.dto';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
declare var $: any;
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './project-overview.component.html',
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, CommonModule, NgxDatatableModule
    , FormsModule]
})
export class ProjectOverviewComponent {
  projects: Project[] = [{
    ProjectID: 1,
    ProjectName: "Project1",
    ClientName: "Client 1",
    SubProjectName: "",
    Team: "Team 1",
    SubTeam: "",
    Status: ProjectStatusEnum.Won,
    CancellationReason: "",
    PIF_ID: "",
    MCR_ID_BM_Number: "",
    ResourceGroup_ID: "",
    RevenueSource: "",
    Direct_Indirect: "",
    WorkingModel: WorkingModelEnum.Onsite,
    ContractType: ContractTypeEnum['Service based (YEB)'],
    BillingMethod: BillingMethodEnum.Email,
    BillingRate: 100,
    ContractCurrency: "EUR",
    TargetCurrency: "EUR",
    Contractual_PMO_In_Period: 0,
    StartPeriod: "2025-01-10",
    EndPeriod: "2026-01-10",
    BillingFrequency: BillingFrequencyEnum.Monthly,
    PONumber_SAPContractNumber: "",
    ContractNumber: "",
    PO_Amount: 1000,
    Remarks: "",
  }];
  projectStatusEnum = ProjectStatusEnum;
  contractTypeEnum = ContractTypeEnum;
  billingMethodEnum = BillingMethodEnum;
  billingFrequencyEnum = BillingFrequencyEnum;
  isEdit: boolean = false;
  constructor(private cdRef: ChangeDetectorRef, private router: Router) { }
  ngOnInit() {
    // Initialize DataTables on a table element after the view is initialized
    $(document).ready(function () {
      $('#example').dataTable({
        "sScrollX": "100%",
        "sScrollXInner": "110%",
      });
    });
    this.loadProjectsFromLocalStorage();
  }
  loadProjectsFromLocalStorage() {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      this.projects = JSON.parse(storedProjects);
    } else {
      this.saveProjectsToLocalStorage;
    }
  }

  // Function to save the employees array to localStorage
  saveProjectsToLocalStorage() {
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  onChangeFields(projectID: number, event: Event | null) {
    const project = this.projects.find(emp => emp.ProjectID === projectID);
    console.log(project, projectID);
    if (project && event?.target) {
      this.cdRef.detectChanges();
      this.saveProjectsToLocalStorage();
    }
  }

  handleCreateProject() {
    this.router.navigate(['/project-create']);
  }

  onEditRecord() {
    this.isEdit = !this.isEdit;
    this.cdRef.detectChanges();
  }
}
