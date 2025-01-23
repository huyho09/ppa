import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';

export const routes: Routes = [
  // Redirect the base path to the login page
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'home',
        loadComponent: () => import('./views/home/home.component').then(m => m.HomeComponent),
        data: {
          title: ``
        }
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
      },
      {
        path: 'employee-create',
        loadComponent: () => import('./views/employee-profile/employee-create/employee-create.component').then(m => m.EmployeeCreateComponent),
        data: {
          title: 'Employee Create'
        }
      },
      {
        path: 'employee-profile',
        loadChildren: () => import('./views/employee-profile/routes').then((m) => m.routes)
      },
      {
        path: 'project',
        loadChildren: () => import('./views/project/routes').then((m) => m.routes)
      },
      {
        path: 'billing',
        loadComponent: () => import('./views/billing/billing.component').then(m => m.BillingComponent),
      },
      {
        path: 'user-access',
        loadComponent: () => import('./views/user-access/user-access.component').then(m => m.UserAccessComponent)
      }
    ]
  },
  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  { path: '**', redirectTo: 'dashboard' }
];
