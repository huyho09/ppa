import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-picture',
  imports: [],
  templateUrl: './upload-picture.component.html',
  styleUrl: './upload-picture.component.scss'
})
export class UploadPictureComponent {
  selectedFile: File | null = null;
  constructor(private http: HttpClient){}

  onFileSelect(event: Event)
  {
    const input = event.target as HTMLInputElement;
    if(input.files && input.files.length > 0)
    {
      this.selectedFile = input.files[0]
    }
  }
  onUpload()
  {
    if(this.selectedFile)
    {
      const formData = new FormData();
      formData.append('file',this.selectedFile);
      this.http.post<{url: string}>('http://localhost:3000/upload-picture',formData).subscribe(
        (response) =>
        {
          console.log(response.url)
        }
      )
    }

  }
}
