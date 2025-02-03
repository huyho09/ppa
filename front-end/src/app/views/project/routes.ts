import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: 'client-overview',
        loadComponent: () => import('./client-overview/client-overview.component').then(m => m.ClientOverviewComponent),
        data: {
          title: 'Client Overview'
        }
      },
      {
        path: 'sub-project/table-dashboard',
        loadComponent: () => import('./sub-project/table-dashboard/table-dashboard.component').then(m => m.TableDashboardComponent),
        data: {
          title: 'Sub-Project Overview'
        }
      },
      {
        path: 'project-overview',
        loadComponent: () => import('./project-overview/project-overview.component').then(m => m.ProjectOverviewComponent),
        data: {
          title: 'Project Overview'
        }
      },
      {
        path: 'project-requirement-assignment',
        loadComponent: () => import('./project-requirement-assignment/project-requirement-assignment.component').then(m => m.ProjectRequirementAssignmentComponent),
        data: {
          title: 'Project Requirement & Assignment'
        }
      },
    ]
    
  }
];

