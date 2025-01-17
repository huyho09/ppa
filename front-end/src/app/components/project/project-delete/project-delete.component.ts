import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from '../service/project-service.service';
import { ActivatedRoute, Router } from '@angular/router';

interface Project {
  id: string;
  name: string;
  department: string;
  employees: string[];
  customer: string;
  requirements: string;
  skills: string;
  result_image: string[];
  startDate: string;
  endDate: string;
  status: string;
}

@Component({
  selector: 'app-project-delete',
  imports: [],
  templateUrl: './project-delete.component.html',
  styleUrl: './project-delete.component.scss'
})
export class ProjectDeleteComponent implements OnInit
{
  project: Project = {
    id: '',
    name: '',
    department: '',
    employees: [],
    customer: '',
    requirements: '',
    skills: '',
    result_image: [],
    startDate: '',
    endDate: '',
    status: ''
  }
  constructor(
    private projectService: ProjectServiceService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      if (id)
      {
        const deleteProject = this.projectService.getProjectById(id)
        if (deleteProject)
        {
          this.project = deleteProject
          this.projectService.deleteProject(deleteProject.id).subscribe(
            () => {
            }
          )
        }
      }
  }

}
