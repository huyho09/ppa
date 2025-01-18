import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Forms'
    },
    children: [
      {
        path: '',
        redirectTo: 'form-control',
        pathMatch: 'full'
      },
      {
        path: 'form-control',
        loadComponent: () => import('./form-controls/form-controls.component').then(m => m.FormControlsComponent),
        data: {
          title: 'Form Control'
        }
      },
    ]
  }
];
