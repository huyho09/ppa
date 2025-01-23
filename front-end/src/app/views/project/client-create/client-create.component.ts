import { Component } from '@angular/core';
import { Client } from '../../../dtos/client-dto';
import { CommonModule } from '@angular/common';
import {
  RowComponent, ColComponent,
} from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-create',
  imports: [CommonModule, RowComponent, ColComponent, FormsModule],
  templateUrl: './client-create.component.html',
  styleUrl: './client-create.component.scss'
})
export class ClientCreateComponent {
  client: Client = {
    ClientID: Math.floor(Math.random() * 10000),
    ClientCountry: "CN",
    ClientDivision: "CC",
    SAPID: "",
    ClientName: "",
    WinRate: null
  }

  constructor(private router: Router) { }

  onChange(field: string, event: Event) {
      const inputValue = (event.target as HTMLInputElement).value;
      console.log('Current form data:', this.client);
    }
    handleCancel() {
      this.router.navigate(['/project/client-overview']);
    }
    handleSubmit() {
      const storedClients = localStorage.getItem('clients');
      if (storedClients) {
        var clients: Client[] = JSON.parse(storedClients);
        clients = [...clients, this.client];
        localStorage.setItem('clients', JSON.stringify(clients));
      }
      this.router.navigate(['/project/client-overview']);
    }

}
