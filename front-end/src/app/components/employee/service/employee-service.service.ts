import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Privilege } from '../../role/service/role-service.service';

interface Employee {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  aboutMe:string;
  gender: string;
  email: string;
  joinDate:string;
  password:string;
  skills: string[];
  role: {id: string, name: string, privilege: Privilege };
  is_admin: boolean;
  project: Project;
  department: {id: string, name: string}|null

}

interface Project {
  id: string;
  name: string;
}
@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  private localStorageKey = 'employees';
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://127.0.0.1:3000/employees';


 getEmployeesWithApiCall(){
  return this.http.get<Employee[]>(this.apiUrl)
 }

 getEmployeeWithApiCall(id: string) {
  const api_url = this.apiUrl + '/' + id
  return this.http.get<Employee>(api_url)
 }

 createEmployeeWithApiCall(employee: Employee): Observable<any>{
  employee.id = uuidv4()
  if (employee.joinDate)
  {
    const joinDate = new Date(employee.joinDate)
    employee.joinDate = joinDate.getTime().toString()
  }
  return this.http.post(this.apiUrl,employee)
 }

 updateEmployeeWithApiCall(id:string, updatedEmployee: Employee): Observable<any>{
  const api_url = `${this.apiUrl}/${id}`;
  console.log ("URL is ",api_url)
  if (updatedEmployee.joinDate)
  {
    const joinDate = new Date (updatedEmployee.joinDate)
    if (!isNaN(joinDate.getTime())) {
      updatedEmployee.joinDate = joinDate.getTime().toString()
    }
    else {
      console.log('Invalid Join Date: ',updatedEmployee.joinDate)
    }
  }
  return this.http.patch(api_url,updatedEmployee)
 }

 deleteEmployeeWithApiCall(id: string): Observable<any>
 {
  const api_url = this.apiUrl + '/' +id
  return this.http.delete(api_url)
 }
//WITH LOCAL STORAGE
 getEmployeesJson(): Observable<any> {
  return this.http.get<any>(this.apiUrl);
}
  getEmployees(): Observable<any[]> {
    const employees = this.getEmployeesFromLocalStorage();
    console.log(employees)
    return of(employees);
  }

  createEmployee(employee: any): Observable<Employee> {
    const employees = this.getEmployeesFromLocalStorage();
    employee.id = uuidv4()
    employee.skills.trim()
    employees.push(employee);
    this.saveEmployeesToLocalStorage(employees);
    return of(employee);
  }

  updateEmployee(updatedEmployee: any): Observable<any> {
    const employees = this.getEmployeesFromLocalStorage().map(
    employee => employee.id === updatedEmployee.id ? updatedEmployee : employee
   );
   localStorage.setItem('employees',JSON.stringify(employees))
   return of(updatedEmployee)
  }
  deleteEmployee(employeeId:string): Observable<any>
  {
    const employees = this.getEmployeesFromLocalStorage().filter(
      employee => employee.id !== employeeId
    );
    localStorage.setItem('employees',JSON.stringify(employees))
    return of(null)

  }

  getEmployeeById(id: string): Employee {
    const employees = this.getEmployeesFromLocalStorage()
    return employees.find(employee => employee.id === id)
  }

  public getEmployeesFromLocalStorage(): any[] {
    const employeesJSON = localStorage.getItem(this.localStorageKey);
    return employeesJSON ? JSON.parse(employeesJSON) : [];
  }

  public saveEmployeesToLocalStorage(employees: any[]): void {
    const employeesJSON = JSON.stringify(employees);
    localStorage.setItem(this.localStorageKey, employeesJSON);
  }
}
