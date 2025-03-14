import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';


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
  project: Project;
  department: {id: string, name: string}|null

}
export enum Privilege {
  User = 'user',
  Admin = 'admin',
  SuperAdmin = 'superAdmin'
}

interface Project {
  id: string;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {}

  private url = "http://localhost:3000/employees"

  getEmployees(){
    const token = sessionStorage.getItem("JwtToken")


    return this.http.get<Employee[]>(this.url)
  }

  getEmployee(id : string) {
    const url = `${this.url}/${id}`
    return this.http.get<Employee>(this.url)
  }

  createEmployee(newEmp : Employee): Observable<any>{
    newEmp.id = uuidv4()
    if (newEmp.joinDate){
      const joindDate = new Date(newEmp.joinDate)
      newEmp.joinDate = joindDate.getTime().toString()
    }
    return this.http.post(this.url,newEmp)
  }

  updateEmployeeWithApiCall(id:string, updatedEmployee: Employee): Observable<any>{
    const api_url = `${this.url}/${id}`;
    if (updatedEmployee.joinDate)
    {
      const joinDate = new Date (updatedEmployee.joinDate)
      if (!isNaN(joinDate.getTime())) {
        updatedEmployee.joinDate = joinDate.getTime().toString()
      }
      else {
        alert('Invalid Join Date: ' + updatedEmployee.joinDate)
      }
    }
    return this.http.patch(api_url,updatedEmployee)
   }

   deleteEmployeeWithApiCall(id: string): Observable<any>
   {
    const api_url = this.url + '/' +id
    return this.http.delete(api_url)
   }
}
