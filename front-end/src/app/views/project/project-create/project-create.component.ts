import { Component } from '@angular/core';
import { Project, ProjectStatusEnum, WorkingModelEnum, ContractTypeEnum, BillingMethodEnum, BillingFrequencyEnum } from '../../../dtos/project.dto';
import { CommonModule } from '@angular/common';
import {
  RowComponent, ColComponent,
} from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../../../dtos/client-dto';

@Component({
  selector: 'app-project-create',
  imports: [CommonModule, RowComponent, ColComponent, FormsModule],
  templateUrl: './project-create.component.html',
  styleUrl: './project-create.component.scss'
})
export class ProjectCreateComponent {
  project: Project = {
    ProjectID: Math.floor(Math.random() * 10000),
    ProjectName: "",
    ClientName: "",
    SubProjectName: "",
    Team: "",
    SubTeam: "",
    Status: ProjectStatusEnum['In Contact'],
    CancellationReason: "",
    PIF_ID: "",
    MCR_ID_BM_Number: "",
    ResourceGroup_ID: "",
    RevenueSource: "",
    Direct_Indirect: "",
    WorkingModel: WorkingModelEnum.Onsite,
    ContractType: ContractTypeEnum['Service based (YEB)'],
    BillingMethod: BillingMethodEnum.Email,
    BillingRate: 0,
    ContractCurrency: "EUR",
    TargetCurrency: "EUR",
    Contractual_PMO_In_Period: 0,
    StartPeriod: "2025-01-01",
    EndPeriod: "2025-01-01",
    BillingFrequency: BillingFrequencyEnum.Monthly,
    PONumber_SAPContractNumber: "",
    ContractNumber: "",
    PO_Amount: 0,
    Remarks: "",
  };
  clients: Client[] = [];
  subProjects: Project[] = [];
  projectStatusEnum = ProjectStatusEnum;
  contractTypeEnum = ContractTypeEnum;
  billingMethodEnum = BillingMethodEnum;
  billingFrequencyEnum = BillingFrequencyEnum;
  constructor(private router: Router) { }

  ngOnInit() {
    const storedClients = localStorage.getItem('clients');
    if (storedClients) {
      this.clients = JSON.parse(storedClients);
    } 
    const storedProjects = localStorage.getItem('projects');
    if(storedProjects){
      this.subProjects = JSON.parse(storedProjects);
    }
  }


  onChange(field: string, event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    console.log('Current form data:', this.project);
  }
  handleCancel() {
    this.router.navigate(['/project/project-overview']);
  }
  handleSubmit() {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      var projects: Project[] = JSON.parse(storedProjects);
      projects = [...projects, this.project];
      localStorage.setItem('projects', JSON.stringify(projects));
    }
    this.router.navigate(['/project/project-overview']);
  }
}
