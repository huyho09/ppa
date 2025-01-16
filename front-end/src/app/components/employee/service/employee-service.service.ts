import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs';

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
    this.employees.push(employee)
    return of(employee)
  }
}
