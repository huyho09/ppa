import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: '',
    },
    children: [
      {
        path: 'employee-overview',
        loadComponent: () => import('./employee-overview/employee-overview.component').then(m => m.EmployeeOverviewComponent),
        data: {
          title: 'Employee Overview'
        }
      },
      {
        path: 'pending-approvals',
        loadComponent: () => import('./pending-approvals/pending-approvals.component').then(m => m.PendingApprovalsComponent),
        data: {
          title: 'Pending Approvals'
        }
      },
    ],
  }
];


