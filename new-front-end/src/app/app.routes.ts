import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { IndexComponent } from './components/adminPage/employee/index/index.component';
import { DashboardComponent } from './components/adminPage/dashboard/dashboard.component';
import { CreateComponent } from './components/adminPage/employee/create/create.component';
import { UpdateComponent } from './components/adminPage/employee/update/update.component';
import { DeleteComponent } from './components/adminPage/employee/delete/delete.component';


export const routes: Routes = [
  // Login Route
  { path: 'login', component: LoginComponent },
  { path: 'index',component: IndexComponent},
  {
    path: 'admin',component: DashboardComponent,children: [

      {path: 'employee',component: IndexComponent },
      {path: 'employee/create', component: CreateComponent},
      {path: 'employee/update/:id',component: UpdateComponent},
      {path: 'employee/delete/:id',component: DeleteComponent}

    ]
  },


  // // Dashboard Route with Child Routes
  // {
  //   path: 'dashboard', component: DashboardComponent, children: [

  //     {path:'navbar',component: NavbarComponent},

  //     // Employee Routes
  //     { path: 'employee', component: EmployeeIndexComponent },
  //     { path: 'employee/create', component: EmployeeCreateComponent },
  //     { path: 'employee/update/:id', component: EmployeeUpdateComponent },
  //     { path: 'employee/delete/:id', component: EmployeeDeleteComponent },
  //     { path: 'employee/expertProfile/:id', component: ExpertProfileComponent },


  //     // Project Routes
  //     { path: 'project', component: ProjectIndexComponent },
  //     { path: 'project/create', component: ProjectCreateComponent },
  //     { path: 'project/update/:id', component: ProjectUpdateComponent },
  //     { path: 'project/delete/:id', component: ProjectDeleteComponent },

  //     // Customer Routes
  //     { path: 'customer', component: CustomerIndexComponent },
  //     { path: 'customer/create', component: CustomerCreateComponent },
  //     { path: 'customer/update/:id', component: CustomerUpdateComponent },
  //     { path: 'customer/delete/:id', component: CustomerDeleteComponent },

  //     {path: 'department', component: DepartmenIndexComponentComponent},
  //     {path: 'department/create',component: DepartmentCreateComponentComponent},
  //     {path: 'department/update/:id', component: DepartmentUpdateComponentComponent},
  //     {path: 'department/delete/:id', component: DepartmentDeleteComponentComponent},

  //     {path: 'role', component: RoleIndexComponent},
  //     {path: 'role/create', component: RoleCreateComponent},
  //     {path: 'role/update/:id', component: RoleUpdateComponent},
  //     {path: 'role/delete/:id',component: RoleDeleteComponent},

  //     {path: 'overview', component: DepartmentDescribeComponent},
  //     {path: 'overview/orgchart', component: OrgChartComponent},

  //     {path: 'docs/sql', component: SqlDocsComponent},
  //     {path: 'docs/node', component: NodeComponentComponent}

  //   ]
  // },

  // Redirect to login if no path is matched
  { path: '', redirectTo: '/index', pathMatch: 'full' }
];
