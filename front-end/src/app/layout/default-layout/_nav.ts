import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Home',
    url: '/',
    iconComponent: { name: 'cil-home' },
  },
  {
    name: 'Employee Profile',
    url: '/employee-profile',
    iconComponent: { name: 'cil-people' },
    children: [
      {
        name: 'Employee Overview',
        url: '/employee-profile/employee-overview',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Pending Approvals',
        url: '/employee-profile/pending-approvals',
        icon: 'nav-icon-bullet'
      },
  
    ]
  },
  {
    name: 'Project',
    url: '/project',
    iconComponent: { name: 'cil-description' },
    children: [
      {
        name: 'Client Overview',
        url: '/project/client-overview',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Project Overview',
        url: '/project/project-overview',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Project Requirement Assignment',
        url: '/project/project-requirement-assignment',
        icon: 'nav-icon-bullet'
      },
    ]
  },
  {
    name: 'Billing',
    iconComponent: { name: 'cil-bold' },
    url: '/billing',
  },
  {
    name: 'User Access',
    iconComponent: { name: 'cil-settings' },
    url: '/user-access'
  },
 
];
