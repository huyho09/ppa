import { Component } from '@angular/core';
import { Project, ProjectStatusEnum, WorkingModelEnum, ContractTypeEnum, BillingMethodEnum, BillingFrequencyEnum } from '../../../dtos/project.dto';
import { CommonModule } from '@angular/common';
import {
  RowComponent, ColComponent,
} from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../../../dtos/client-dto';
import { ProjectService } from 'src/app/services/project/project.service';
import { CreateProjectRequest } from 'src/app/models/requests/project/create-project.request';


@Component({
  selector: 'app-project-create',
  standalone: true,
  imports: [CommonModule, RowComponent, ColComponent, FormsModule],
  templateUrl: './project-create.component.html',
  styleUrl: './project-create.component.scss'
})
export class ProjectCreateComponent {
  project: Project = {
    ProjectID: Math.floor(Math.random() * 10000),
    ProjectName: "",
    ClientName: "",
    SubProjectIds: [],
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
  constructor(private router: Router,private projectService: ProjectService) { }

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

  onSubmit1() {
    // Set test data (for testing purposes)
    // this.project = { name: "Test Project" };
    const createProject: CreateProjectRequest = {
      ProjectName: "Project1",
      ClientName: "Client 1",
      SubProjectIds: [], // Empty array as per your data test
      Team: "Team 1",
      SubTeam: "SubTeam A", // Optional field, but included here
      Status: "Won", // Status as a string
      CancellationReason: "string", // Optional, but included here
      PifId: "string", // Optional, included here
      McrIdBmNumber: "string", // Optional, included here
      ResourceGroupId: "string", // Optional, included here
      RevenueSource: "string", // Optional, included here
      DirectIndirect: "string", // Optional, included here
      WorkingModel: "Onsite", // Enum value as string
      ContractType: "Service based (YEB)", // Enum value as string
      BillingMethod: "Email", // Enum value as string
      BillingRate: 100, // Numeric value
      ContractCurrency: "EUR",
      TargetCurrency: "EUR",
      ContractualPmoInPeriod: 0, // Numeric value
      StartPeriod: "2025-01-10",
      EndPeriod: "2026-01-10",
      BillingFrequency: "Monthly", // Enum value as string
      PoNumberSapContractNumber: "string", // Optional, included here
      ContractNumber: "string", // Optional, included here
      PoAmount: 1000, // Numeric value
      Remarks: "string" // Optional, included here
    };
    
    this.projectService.createProject(createProject).subscribe(
      response => {
        console.log('Project created successfully:', response);
        alert('Project created successfully!');
      },
      error => {
        console.log(error);
        // console.error('Error creating project:', error);
        // alert('Failed to create project');
      }
    );
  }
}
