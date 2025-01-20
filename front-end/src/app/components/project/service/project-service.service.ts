import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';


interface Project {
  id: string;
  name: string;
  department: string;
  employees: string[];
  customer: string;
  requirements: string;
  skills: string[];
  result_image: string[];
  startDate: string;
  endDate: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

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
