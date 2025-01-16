import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

interface Employee {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  email: string;
  birthday: string;
  skills: string;
  role: string;
  is_admin: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  private apiUrl = 'assets/data/employees.json';
  private localStorageKey = 'employees';
  employees: Employee[] = [];
  constructor(private http: HttpClient) {}

  getEmployeesJson(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  // getEmployees(): Observable<any[]> {
  //   const employees = localStorage.getItem(this.storageKey)
  //   if (employees != null)
  //   {
  //     const employees_json = JSON.parse(employees)
  //     return employees_json

  //   }
  //   else
  //   {

  //   }
  // }
  getEmployees(): Observable<Employee[]> {
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

  public getEmployeesFromLocalStorage(): any[] {
    const employeesJSON = localStorage.getItem(this.localStorageKey);
    return employeesJSON ? JSON.parse(employeesJSON) : [];
  }
  public saveEmployeesToLocalStorage(employees: any[]): void {
    const employeesJSON = JSON.stringify(employees);
    localStorage.setItem(this.localStorageKey, employeesJSON);
  }
}
