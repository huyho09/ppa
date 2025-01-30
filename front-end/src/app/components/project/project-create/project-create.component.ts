import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProjectServiceService } from '../service/project-service.service';
import { EmployeeServiceService } from '../../employee/service/employee-service.service';
import { CustomerServiceService } from '../../customer/service/customer-service.service';
import { DepartmentServiceService } from '../../department/service/department-service.service';
import { forkJoin } from 'rxjs';

interface Employee {
  id: string;
  firstname: string;
  lastname: string;
}

interface Project {
  id: string;
  name: string;
  requirements: string;
  skills: string[];
  result_image: string[];
  project_start_date: string;
  project_end_date: string;
  createdAt: string;
  endAt: string;
  lastUpdatedat: string;
  department: Department;
  customer: Customer;
}

interface Department {
  id: string;
  name: string;
}

interface Customer {
  id: string;
  firstname: string;
  lastname: string;
}

interface ProjectEmployee {
  employeeId: string;
  role_in_project: string;
  task: string;
  effort: number;
}

@Component({
  selector: 'app-project-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss'],
})
export class ProjectCreateComponent implements OnInit {
  newProject: Project = {
    id: '',
    name: '',
    department: { id: '', name: '' },
    customer: { id: '', firstname: '', lastname: '' },
    requirements: '',
    skills: [],
    result_image: [],
    project_start_date: '',
    project_end_date: '',
    createdAt: '',
    endAt: '',
    lastUpdatedat: '',
  };

  selectedEmployees: string[] = [];
  skillsString: string = '';
  projectEmployee: ProjectEmployee[] = [];
  employees: Employee[] = [];
  departments: Department[] = [];
  customers: Customer[] = []; 
  selectedEmployee: string[] = [];
  constructor(
    private projectService: ProjectServiceService,
    private employeeService: EmployeeServiceService,
    private customerService: CustomerServiceService,
    private departmentService: DepartmentServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeService.getEmployeesWithApiCall().subscribe((employeeData: Employee[]) => {
      this.employees = employeeData;
    });

    this.departmentService.getDepartmentsWithApiCall().subscribe((departmentData) => {
      this.departments = departmentData;
    });

    this.customerService.getCustomersWithApiCall().subscribe((customerData) => {
      this.customers = customerData;
    });
  }

  onEmployeeSelect(event: Event): void {
    const selectedOptions = (event.target as HTMLSelectElement).selectedOptions;
    this.projectEmployee = []; 
    this.selectedEmployee = []

    for (let i = 0; i < selectedOptions.length; i++) {
      const employeeId = selectedOptions[i].value.split(': ')[1] || selectedOptions[i].value;
      const employeeName = (this.getEmployeeName(employeeId))

      if(employeeName && !this.selectedEmployee.includes(employeeName)){
        this.selectedEmployee.push(employeeName)
      }
      if (!this.projectEmployee.some((pe) => pe.employeeId === employeeId)) {
        this.projectEmployee.push({
          employeeId,
          role_in_project: '',
          task: '',
          effort: 0,
        });
      }
    }
  }

  getEmployeeName(id : string): string | undefined{
    const employeeGetName = this.employees.find(emp => emp.id === id)
    const employeeName = employeeGetName?.firstname + " " + employeeGetName?.lastname
    return employeeName
  }

  addProject(): void {
    if (this.newProject.project_start_date > this.newProject.project_end_date) {
      alert('End Date cannot happen before Start Date');
      return;
    }

    this.newProject.skills = this.skillsString.split(',').map((skill) => skill.trim());
    this.newProject.customer =
      this.customers.find((customer) => customer.id === this.newProject.customer.id) || {
        id: '',
        firstname: '',
        lastname: '',
      };
    this.newProject.department =
      this.departments.find((department) => department.id === this.newProject.department.id) || {
        id: '',
        name: '',
      };

    this.projectService.createProjectWithApiCall(this.newProject).subscribe((createdProject) => {
      console.log('Project Employees:', this.projectEmployee);
      const projectEmployeeRequests = this.projectEmployee.map((employee) => {
        const payload = {
          role_in_project: employee.role_in_project,
          task: employee.task,
          effort: employee.effort,
          projectId: createdProject.id,
          employeeId: employee.employeeId,
        };
        return this.projectService.createProjectEmployeeWithApiCall(payload);
      });

      forkJoin(projectEmployeeRequests).subscribe(() => {
        this.router.navigate(['/dashboard/project']);
      });
    });
  }
}
