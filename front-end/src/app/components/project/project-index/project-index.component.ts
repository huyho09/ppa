import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from '../service/project-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {Chart} from 'chart.js/auto'
interface Project {
  id: string;
  name: string;
  department: string;
  employees: string[];
  customer: string;
  requirements: string;
  skills: string;
  result_image: string[];
  startDate: string | Date;
  endDate: string | Date;
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
  isFormVisible: boolean = false
  currentRequirements: string = ''
  todayDate: Date = new Date();
  // countOverdue: number = 0;
  // OverdueMessage: string ='Congratulation, you have no overdue Projects'

  constructor(private projectService: ProjectServiceService){}

  ngOnInit(): void {
      this.projectService.getProjects().subscribe(
        (data) => {
          this.projects = data
          this.countProjects()
          this.countTotal= this.countOpen + this.countReview + this.countClosed + this.countInProgress;
          // for(const project of this.projects)
          // {
          //   project.startDate = new Date(project.startDate)
          //   project.endDate = new Date(project.endDate)
          //   if (project.endDate < this.todayDate)
          //   {
          //     this.OverdueMessage = project.id + " : is overdue, please be caution!"
          //   }
          // }
          this.createOpenChart()
          this.createInProgressChart()
          this.createInReviewChart()
          this.createClosedChart()
        }
      )
  }

showForm(requirements: string) : void{
  this.currentRequirements = requirements
  this.isFormVisible = !this.isFormVisible
  if (this.isFormVisible == true)
  {
    console.log(this.todayDate)
  }
  else
  {
    console.log('form is closed')
  }
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
createOpenChart(): void {
  new Chart('projectOpenChart', {
    type: 'doughnut',
    data: {
      labels: ['Open', 'Other'],
      datasets: [
        {
          label: 'Projects',
          data: [
            this.countOpen,
            this.countTotal - this.countOpen,
          ],
          backgroundColor: ['#3498db', '#f1c40f'],
          hoverOffset: 4
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          callbacks: {
            label:(tooltipItem) => {
              const value = tooltipItem.raw;
              return `$(value) projects`;
            }
          }
        }
      }
    }
  })
}

createInProgressChart(): void {
  new Chart('projectInProgressChart', {
    type: 'doughnut',
    data: {
      labels: ['In Progress', 'Other'],
      datasets: [
        {
          label: 'Projects',
          data: [
            this.countInProgress,
            this.countTotal - this.countInProgress,
          ],
          backgroundColor: ['#3498db', '#f1c40f'],
          hoverOffset: 4
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          callbacks: {
            label:(tooltipItem) => {
              const value = tooltipItem.raw;
              return `$(value) projects`;
            }
          }
        }
      }
    }
  })
}

createInReviewChart(): void {
  new Chart('projectInReviewChart', {
    type: 'doughnut',
    data: {
      labels: ['In Review', 'Other'],
      datasets: [
        {
          label: 'Projects',
          data: [
            this.countReview,
            this.countTotal - this.countReview,
          ],
          backgroundColor: ['#3498db', '#f1c40f'],
          hoverOffset: 4
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          callbacks: {
            label:(tooltipItem) => {
              const value = tooltipItem.raw;
              return `$(value) projects`;
            }
          }
        }
      }
    }
  })
}

createClosedChart(): void {
  new Chart('projectClosedChart', {
    type: 'doughnut',
    data: {
      labels: ['Closed', 'Other'],
      datasets: [
        {
          label: 'Projects',
          data: [
            this.countClosed,
            this.countTotal - this.countClosed,
          ],
          backgroundColor: ['#3498db', '#f1c40f'],
          hoverOffset: 4
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          callbacks: {
            label:(tooltipItem) => {
              const value = tooltipItem.raw;
              return `$(value) projects`;
            }
          }
        }
      }
    }
  })
}

}
