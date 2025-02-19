import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-department-describe',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './department-describe.component.html',
  styleUrl: './department-describe.component.scss'
})
export class DepartmentDescribeComponent {
  pdfSrc: SafeResourceUrl | null = null;

  constructor(private sanitizer : DomSanitizer){}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      const url  = URL.createObjectURL(file);
      this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url)
    } else {
      alert('Please select a PDF file.');
    }
  }
}
