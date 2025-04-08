import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

interface Department{
  id: string,
  name: string,
  overview: string,
  createdAt: string
}
@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:3000/departments"

  getDepartments(){
    return this.http.get<Department[]>(this.url)
  }

  getDepartment(id: string){
    const url = `${this.url}/${id}`
    return this.http.get<Department>(url)
  }

  createDepartment(newDep: Department): Observable<any> {
    newDep.id = uuidv4()
    const create_date  = new Date()
    newDep.createdAt = create_date.getTime().toString()
    return this.http.post<any>(this.url,newDep)
  }

  updateDepartment(updateDep: any,id: string): Observable<Department>{
    const url = `${this.url}/${id}`
    return this.http.patch<any>(url,updateDep)
  }

  deleteDepartment(id: string){
    return this.http.delete(`${this.url}/${id}`)
  }
}

