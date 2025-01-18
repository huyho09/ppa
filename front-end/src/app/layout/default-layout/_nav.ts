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
        name: 'Accordion',
        url: '/employee-profile/accordion',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Breadcrumbs',
        url: '/employee-profile/breadcrumbs',
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
        name: 'Buttons',
        url: '/project/buttons',
        icon: 'nav-icon-bullet'
      },
    ]
  },
  {
    name: 'Billing',
    url: '/billing',
    iconComponent: { name: 'cil-bold' },
    children: [
      {
        name: 'Form Control',
        url: '/billing/form-control',
        icon: 'nav-icon-bullet'
      },

    ]
  },
  {
    name: 'User Access',
    iconComponent: { name: 'cil-settings' },
    url: '/user-access'
  },
 
];
