import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from '../service/project-service.service';
import { ActivatedRoute,Route,Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeServiceService } from '../../employee/service/employee-service.service';
import { CustomerServiceService } from '../../customer/service/customer-service.service';
import { DepartmentServiceService } from '../../department/service/department-service.service';
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
  selector: 'app-project-update',
  standalone:true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './project-update.component.html',
  styleUrl: './project-update.component.scss'
})
export class ProjectUpdateComponent implements OnInit {
constructor(
  private projectService: ProjectServiceService,
  private employeeService: EmployeeServiceService,
  private customerService: CustomerServiceService,
  private departmentService: DepartmentServiceService,
  private route: ActivatedRoute,
  private router: Router,
){}
customers: Customer[] = []
employees: Employee[] = []
departments: Department[] =[]
projectEmployee: ProjectEmployee[] =[]
selectedEmployees: string[] = [];

project: Project = {
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
  lastUpdatedat: '',
};
skillsString: string = '';
ngOnInit(): void {
  this.loadEmployees()
  this.loadCustomers()
  this.loadDepartment()
  
    const id = this.route.snapshot.paramMap.get('id')
    if(id)
    {
      this.projectService.getProjectWithApiCall(id).subscribe(
        (response : any) => {
          if(response)
          {
            this.project = response
            this.project.project_start_date = new Date(Number(this.project.project_start_date)).toISOString().split('T')[0];
            this.project.project_end_date = new Date(Number(this.project.project_end_date)).toISOString().split('T')[0];

            console.log(this.project.department)
          }
        }
      )
    }

}
onEmployeeSelect(event: Event): void {
  const selectedOptions = (event.target as HTMLSelectElement).selectedOptions;
  this.projectEmployee = []; 
  this.selectedEmployees = []

  for (let i = 0; i < selectedOptions.length; i++) {
    const employeeId = selectedOptions[i].value.split(': ')[1] || selectedOptions[i].value;
    const employeeName = (this.getEmployeeName(employeeId))

    if(employeeName && !this.selectedEmployees.includes(employeeName)){
      this.selectedEmployees.push(employeeName)
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

getEmployeeName(id: string) : string | undefined{
  const findEmp = this.employees.find((emp) => emp.id === id)
  const empName = findEmp?.firstname + ' ' + findEmp?.lastname
  return empName
}
loadEmployees()
{
  this.employeeService.getEmployeesWithApiCall().subscribe((employeesData: Employee[]) =>
  {
    this.employees = employeesData

  })
}
loadCustomers(){
  this.customerService.getCustomersWithApiCall().subscribe(
    (customersData: Customer[]) => {
      this.customers = customersData
    }
  )
}

loadDepartment(){
  this.departmentService.getDepartmentsWithApiCall().subscribe(
    (departmentsData: Department[]) => {
      this.departments = departmentsData
    }
  )
}

updateProject() {
  this.project.skills = this.skillsString.split(',')
  this.projectService.updateProject(this.project).subscribe(
    () => {
    }
  )
}

}
