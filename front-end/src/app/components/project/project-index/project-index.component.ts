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
  constructor(private projectService: ProjectServiceService){}

  ngOnInit(): void {
      this.projectService.getProjects().subscribe(
        (data) => {
          this.projects = data
        }
      )
  }


}
