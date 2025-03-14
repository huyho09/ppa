import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeIndexComponent } from "../components/employee/employee-index/employee-index.component";
import { ProjectIndexComponent } from "../components/project/project-index/project-index.component";

interface UploadResponse {
  message: string;
  files: string[];
}
interface UploadPptResponse{
  images: string[];
}
@Component({
  selector: 'app-department-describe',
  standalone: true,
  imports: [FormsModule, CommonModule, EmployeeIndexComponent, ProjectIndexComponent],
  templateUrl: './department-describe.component.html',
  styleUrl: './department-describe.component.scss'
})

export class DepartmentDescribeComponent implements OnInit{

  pictures: string[] = []
  isVertical: boolean = false;
  isZipFile: boolean = false;

  constructor(private http : HttpClient){}

  @ViewChild('fileInput') fileInput !: ElementRef<HTMLInputElement>

  onFileSelected(event: any): void {
    const file:File = event.target.files[0];
    if(file){
      const formData = new FormData();
      formData.append('file',file,file.name)
      this.http.post<UploadResponse>('http://localhost:3000/upload-picture/upload', formData).subscribe(
        (response) => {
          console.log(response)
          this.pictures = response.files
        }
      )
    }
  }

  onFilePPTSelected(event: any): void {
    const file:File = event.target.files[0];
    if(file){
      const formData = new FormData();
      formData.append('file',file,file.name)
      this.http.post<UploadPptResponse>('http://localhost:5000/convert/', formData).subscribe(
        (response) => {
          console.log(response)
          this.pictures = response.images
        }
      )
    }
  }
  toggleVericalSlide() {
    this.isVertical = ! this.isVertical;
    console.log("Toggle View")
  }
  changeUploadMethod(){
    this.isZipFile = !this.isZipFile
  }

  ngOnInit(): void {
  }

  deleteSlide(){
    const url = "http://localhost:3000/upload-picture/clear-slide"
    this.http.delete(url).subscribe(
      () => {
        alert('All files in slide folder have been deleted successfully');
        this.pictures = []
      },
      (error) => {
        console.error('Error deleting files:', error);
      }
    )
  }

}
