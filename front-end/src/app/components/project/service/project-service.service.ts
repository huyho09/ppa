import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';


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
  name : string;
}

interface Customer {
  id: string;
  firstname: string;
  lastname: string
}

interface ProjectEmployee {
  employeeId: string;
  role_in_project: string;
  task: string; 
  effort: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  //With Api Call
  private apiUrl = 'http://localhost:3000/projects'
  constructor(
    private http: HttpClient
  )
  {}
  getProjectsWithApiCall()
  {
    return this.http.get<Project[]>(this.apiUrl)
  }

  getProjectWithApiCall(id : string) {
    const api_url = `${this.apiUrl}/${id}`
    return this.http.get<Project>(api_url)
  }

  createProjectWithApiCall(project : Project): Observable<Project>
  {
    project.id = uuidv4()
    const createdDate = new Date()
    project.createdAt = createdDate.getTime().toString()
    project.lastUpdatedat = project.createdAt
    if (project.project_start_date)
    {
      const startDate = new Date(project.project_start_date)
      project.project_start_date = startDate.getTime().toString()
    }
    if (project.project_end_date)
    {
      const endDate = new Date(project.project_end_date)
      project.project_end_date = endDate.getTime().toString()
    }
  
    return this.http.post<Project>(this.apiUrl, project)
  }

  updateProjectWithApiCall(id: string, updatedProject: any): Observable<Project> {
    const api_url = `${this.apiUrl}/${id}`
    return this.http.patch<any>(api_url,updatedProject)

  }

  deleteProjectWithApiCall(id : string)
  {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

  createProjectEmployeeWithApiCall (projectEmployee: ProjectEmployee): Observable<ProjectEmployee>
  {
    const api_url = 'http://localhost:3000/project-employees'
    return this.http.post<ProjectEmployee>(api_url,projectEmployee)
  }
  updateProjectEmployeeWithApiCall(id : number, updatedProjectEmployee: any): Observable<any> {
    const api_url = `http://localhost:3000/project-employees/${id}`
    return this.http.patch<ProjectEmployee>(api_url, updatedProjectEmployee)
  }
  //With Local Storage
  private localKeyStorage = 'projects'
  private projects : Project[] = []

  getProjects(): Observable<any[]> {
    const projects = this.getProjectsFromLocalStorage();
    console.log(projects)
    return of(projects);
  }

  createProject(project:any): Observable<any> {
    const projects = this.getProjectsFromLocalStorage()
    project.id = uuidv4()
    projects.push(project)
    this.saveProjectsToLocalStorage(projects)
    return of(project)
  }

  updateProject(updatedProject: any): Observable<any> {
    const projecst = this.getProjectsFromLocalStorage().map(
    (project: Project) => project.id === updatedProject.id ? updatedProject : project
   );
   localStorage.setItem('projects',JSON.stringify(projecst))
   return of(updatedProject)
  }

  deleteProject(projectId:string): Observable<any>
  {
    const projects = this.getProjectsFromLocalStorage().filter(
      (project: Project) => project.id !== projectId
    );
    localStorage.setItem('projects',JSON.stringify(projects))
    return of(null)

  }

  getProjectById(id: string): Project {
    const projects = this.getProjectsFromLocalStorage()
    return projects.find((project: Project) => project.id === id)
  }

  getProjectsFromLocalStorage(){
    const projecstsJSON = localStorage.getItem('projects')
    return projecstsJSON ? JSON.parse(projecstsJSON) : []
  }

  saveProjectsToLocalStorage(projects: any[]){
    const projecstJson = JSON.stringify(projects)
    localStorage.setItem(this.localKeyStorage,projecstJson)
  }


}
