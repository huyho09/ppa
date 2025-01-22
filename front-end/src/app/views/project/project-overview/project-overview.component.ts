import { Component } from '@angular/core';
import {
  ColComponent,
  RowComponent,
} from '@coreui/angular';

@Component({
    selector: 'app-buttons',
    templateUrl: './project-overview.component.html',
    imports: [RowComponent, ColComponent]
})
export class ProjectOverviewComponent {

  states = ['normal', 'active', 'disabled'];
  colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

}
