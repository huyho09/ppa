import { Component, ChangeDetectorRef } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent } from '@coreui/angular';
import { Client } from '../../../dtos/client-dto';
declare var $: any;
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-overview',
  templateUrl: './client-overview.component.html',
  styleUrls: ['./client-overview.component.scss'],
  imports: [RowComponent, ColComponent, FormsModule, CardComponent, CardHeaderComponent, CardBodyComponent, CommonModule]
})
export class ClientOverviewComponent {
  clients: Client[] = [{
    ClientID: 1,
    ClientName: 'Client 1',
    ClientCountry: 'Country 1',
    ClientDivision: 'Division 1',
    SAPID: "SAP ID 1",
    WinRate: null
  },
  {
    ClientID: 2,
    ClientName: 'Client 2',
    ClientCountry: 'Country 2',
    ClientDivision: 'Division 2',
    SAPID: "SAP ID 2",
    WinRate: null,
  },
  ]
  isEdit: boolean = false;
  ngOnInit() {
    // Initialize DataTables on a table element after the view is initialized
    $(document).ready(function () {
      $('#example').dataTable({
        responsive: true,
        sScrollX: "100%",
        sScrollXInner: "110%",
      });
    });
    this.loadClientsFromLocalStorage();
  }

  constructor(
    private formBuilder: UntypedFormBuilder, private router: Router, private cdRef: ChangeDetectorRef
  ) { }

  loadClientsFromLocalStorage() {
    const storedClients = localStorage.getItem('clients');
    if (storedClients) {
      this.clients = JSON.parse(storedClients);
    } else {
      this.saveClientsToLocalStorage();
    }
  }

  // Function to save the employees array to localStorage
  saveClientsToLocalStorage() {
    localStorage.setItem('clients', JSON.stringify(this.clients));
  }

  onChangeFields(clientID: number, event: Event | null) {
    const client = this.clients.find(emp => emp.ClientID === clientID);
    console.log(client, clientID);
    if (client && event?.target) {
      this.cdRef.detectChanges();
      this.saveClientsToLocalStorage();
    }
  }

  handleCreateClient() {
    this.router.navigate(['/client-create']);
  }

  onEditRecord() {
    this.isEdit = !this.isEdit;
    this.cdRef.detectChanges();
  }

}
