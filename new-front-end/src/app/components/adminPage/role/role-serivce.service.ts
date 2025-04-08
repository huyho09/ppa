import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';


export enum Privilege{
  SuperAdmin = "superAdmin",
  Admin = "admin",
  User = "user",
}
interface Role {
  id: string,
  name: string
  privilege: Privilege
}
@Injectable({
  providedIn: 'root'
})
export class RoleSerivceService {

  constructor(private http:HttpClient) {}

  url = "http://localhost:3000/role"

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.url)
  }

  getRole(id: string): Observable<Role> {
    const url = `${this.url}/${id}`
    return this.http.get<Role>(url)
  }

  createRole(newRole: Role): Observable<Role>{
    newRole.id = uuidv4()
    return this.http.post<Role>(this.url,newRole)
  }

  updateRole(id:string , updateRole: Role): Observable<Role>{
    const url = `${this.url}/${id}`
    return this.http.patch<Role>(url,updateRole)
  }

  deleteRole(id:string){
    const url = `${this.url}/${id}`
    return this.http.delete(url)
  }
}
