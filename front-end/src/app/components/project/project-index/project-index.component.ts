import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from '../service/project-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
  selector: 'app-project-index',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './project-index.component.html',
  styleUrl: './project-index.component.scss'
})
export class ProjectIndexComponent implements OnInit {

  projects: Project[] = []
  countTotal: number = 0
  countOpen: number = 0
  countInProgress: number = 0
  countReview: number = 0
  countClosed: number = 0

  constructor(private projectService: ProjectServiceService){}

  ngOnInit(): void {
      this.projectService.getProjects().subscribe(
        (data) => {
          this.projects = data
          this.countProjects()
        }
      )

  }
countProjects(): void{
  for(const project of this.projects)
    {
      if (project.status === 'opened')
      {
        this.countOpen +=1
      }
      else if (project.status === 'in_progress')
        this.countInProgress +=1
      else if (project.status === 'in_review')
        this.countReview +=1
      else {
        this.countClosed +=1
      }
    }
}

}
