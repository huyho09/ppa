import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

interface Department {
  id: string,
  name: string,
  overview: string,
  employeesIds: string[],
  createdDate: Date,
}
@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {

  private localStorageKey = 'departments';

  getDepartmentFromLocalStorage() {
    const departments = localStorage.getItem('departments')
    return departments ? JSON.parse(departments) : []
  }

  saveDepartmentToLocalStorage(department: any) {
    const department_json = JSON.stringify(department)
    localStorage.setItem(this.localStorageKey,department_json)
  }

  getDepartments(): Observable<Department[]>
  {
    const departments = this.getDepartmentFromLocalStorage()
    return of(departments)
  }
  createDepartment(newDepartment: Department): Observable<Department>
  {
    const departments = this.getDepartmentFromLocalStorage()
    newDepartment.id = uuidv4()
    newDepartment.createdDate = new Date();
    departments.push(newDepartment)
    this.saveDepartmentToLocalStorage(departments)
    return of(departments)
  }

  updateDepartment(updateDepartment: Department): Observable<Department>
  {
    const  departments = this.getDepartmentFromLocalStorage().map((department: Department) => department.id === updateDepartment.id ? updateDepartment : department );
    localStorage.setItem('departments',JSON.stringify(departments))
    return of(departments)
  }

  deleteDepartment(id: string) : Observable<Department>
  {
    const deletedDepartment = this.getDepartmentById(id)
    const departments = this.getDepartmentFromLocalStorage().filter((department: Department) => department.id !== id)
    this.saveDepartmentToLocalStorage(departments)
    return of(deletedDepartment)

  }

  getDepartmentById(id: string) {
    const departments = this.getDepartmentFromLocalStorage()
    return departments.find((department: Department) => department.id === id)
  }
}
