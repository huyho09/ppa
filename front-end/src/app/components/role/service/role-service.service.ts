import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

export enum Privilege {
  User = 'user',
  Admin = 'admin',
  SuperAdmin = 'superAdmin'
}

interface Role {
  id: string;
  name: string;
  privilege: Privilege;
}

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  constructor(private http: HttpClient) { }

  private api_url = 'http://localhost:3000/role';

  getRolesWithApiCall(): Observable<Role[]> {
    return this.http.get<Role[]>(this.api_url);
  }

  getRoleWithApiCall(id: string): Observable<Role> {
    const api_url = `${this.api_url}/${id}`;
    return this.http.get<Role>(api_url);
  }

  createRoleWithApiCall(newRole: Role): Observable<Role> {
    newRole.id = uuidv4();
    return this.http.post<Role>(this.api_url, newRole);
  }

  updateRoleWithApiCall(id: string, updateRole: Role): Observable<Role> {
    const api_url = `${this.api_url}/${id}`;
    return this.http.patch<Role>(api_url, updateRole);
  }

  deleteRoleWithApiCall(id: string): Observable<Role> {
    const api_url = `${this.api_url}/${id}`;
    return this.http.delete<Role>(api_url);
  }
}
