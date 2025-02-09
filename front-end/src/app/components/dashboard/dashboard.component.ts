import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,NavbarComponent],  // Include RouterModule here
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

}
