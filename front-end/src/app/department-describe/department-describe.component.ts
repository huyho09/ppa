import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeIndexComponent } from "../components/employee/employee-index/employee-index.component";

interface UploadResponse {
  message: string;
  files: string[];
}

@Component({
  selector: 'app-department-describe',
  standalone: true,
  imports: [FormsModule, CommonModule, EmployeeIndexComponent],
  templateUrl: './department-describe.component.html',
  styleUrl: './department-describe.component.scss'
})

export class DepartmentDescribeComponent implements OnInit{

  pictures: string[] = []

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

  ngOnInit(): void {
      this.deleteSlide()
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
