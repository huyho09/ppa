import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Privilege } from '../../role/service/role-service.service';

interface Employee {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  gender: string;
  email: string;
  skills: string[];
  role: {name: string; id: string; privilege: Privilege};
  is_admin: boolean;
  project: { name: string; id: string } | null;
  department: { name: string; id: string } | null;
}

@Component({
  selector: 'app-employee-index',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './employee-index.component.html',
  styleUrls: ['./employee-index.component.scss'],
})
export class EmployeeIndexComponent implements OnInit {
  employees: Employee[] = [];
  user: any = {}
  searchText: string = '';
  isFilterVisible: boolean = false;
  activeDropdown: string | null = null;

  selectedRole: string[] = [];
  selectedProject: string[] = [];
  selectedDepartment: string[] = [];

  uniqueRoles: string[] = [];
  uniqueProjects: string[] = [];
  uniqueTeams: string[] = [];

  constructor(private employeeService: EmployeeServiceService) {}

  ngOnInit(): void {
    const user_data = sessionStorage.getItem('User')
    if (user_data)
    {
      this.user = JSON.parse(user_data)
    }
    this.employeeService.getEmployeesWithApiCall().subscribe((data: Employee[]) => {
      this.employees = data;

      // Extract unique roles, projects, and teams with proper type handling
      this.uniqueRoles = [...new Set(this.employees.map(e => e.role.name))];

      this.uniqueProjects = [
        ...new Set(this.employees.map(e => e.project?.name).filter(Boolean) as string[]),
      ];

      this.uniqueTeams = [
        ...new Set(this.employees.map(e => e.department?.name).filter(Boolean) as string[]),
      ];
    });
  }

  toggleFilterPanel(): void {
    this.isFilterVisible = !this.isFilterVisible;
  }

  toggleDropdown(dropdown: string): void {
    this.activeDropdown = this.activeDropdown === dropdown ? null : dropdown;
  }

  // Update selected filters (multiple selection allowed for role, project, department)
  updateFilter(type: string, value: string): void {
    switch (type) {
      case 'role':
        const roleIndex = this.selectedRole.indexOf(value);
        if (roleIndex === -1) {
          this.selectedRole.push(value);
        } else {
          this.selectedRole.splice(roleIndex, 1);
        }
        break;
      case 'project':
        const projectIndex = this.selectedProject.indexOf(value);
        if (projectIndex === -1) {
          this.selectedProject.push(value);
        } else {
          this.selectedProject.splice(projectIndex, 1);
        }
        break;
      case 'team':
        const teamIndex = this.selectedDepartment.indexOf(value);
        if (teamIndex === -1) {
          this.selectedDepartment.push(value);
        } else {
          this.selectedDepartment.splice(teamIndex, 1);
        }
        break;
    }
  }

  filterEmployee(): Employee[] {
    return this.employees.filter(employee => {
      const searchMatch = this.isEmployeeMatch(employee, this.searchText.toLowerCase().trim());
      const roleMatch = this.selectedRole.length ? this.selectedRole.includes(employee.role.name) : true;
      const projectMatch = this.selectedProject.length ? this.selectedProject.includes(employee.project?.name || '') : true;
      const departmentMatch = this.selectedDepartment.length ? this.selectedDepartment.includes(employee.department?.name || '') : true;

      return searchMatch && roleMatch && projectMatch && departmentMatch;
    });
  }

  isEmployeeMatch(employee: Employee, search: string): boolean {
    if (!search) return true;

    for (let key in employee) {
      const value = employee[key as keyof Employee];
      if (typeof value === 'string' && value.toLowerCase().includes(search)) {
        return true;
      } else if (Array.isArray(value)) {
        if (value.some(item => item.toLowerCase().includes(search))) {
          return true;
        }
      }
    }
    return false;
  }

  validateUserPrivilege() {
    if (this.user.sub.role.privilege === "user")
    {
      return false
    }
    return true
  }
}
