import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs';
import * as fs from 'fs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  private apiUrl = 'assets/data/employees.json';
  private employees: any[] = []

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => {
        this.employees = data;
        return this.employees
      })
    )
  }

  createEmployee(employee: any): Observable<any> { 
    const data = fs.readFileSync(this.apiUrl, 'utf-8'); 
    const employees = JSON.parse(data); 
   
    employees.push(employee); 
     
    const updatedData = JSON.stringify(employees, null, 2); 
    // Write the updated JSON back to the file 
    fs.writeFileSync(this.apiUrl, updatedData); 
    return of(employee); 
  }
}
