import { Component } from '@angular/core';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-expert-profile',
  standalone: true,
  imports: [QuillModule],
  templateUrl: './expert-profile.component.html',
  styleUrl: './expert-profile.component.scss'
})
export class ExpertProfileComponent {

}
