import { Component, ChangeDetectorRef } from '@angular/core';
import {
  RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent
} from '@coreui/angular';
import { FormsModule, UntypedFormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
declare var $: any;
import { Router } from '@angular/router';
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";

@Component({
  selector: 'app-billing',
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, CommonModule, NgxDatatableModule
    , FormsModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss'
})
export class BillingComponent {
  billings: any[] = [];
  isEdit: boolean = false;

  constructor(private formBuilder: UntypedFormBuilder, private cdRef: ChangeDetectorRef, private router: Router) { }

  ngOnInit() {
    // Initialize DataTables on a table element after the view is initialized
    $(document).ready(function () {
      $('#example').dataTable({
        "sScrollX": "100%",
        "sScrollXInner": "110%",
        "bInfo": false,
        "paging": false,
        "bPaginate": false,
        "searching": false
      });
    });
  }
  onChangeFields(billingID: number, event: Event | null) {
    this.cdRef.detectChanges();
  }

  onEditRecord() {
    this.isEdit = !this.isEdit;
    this.cdRef.detectChanges();
  }

  sumArrayNumber(arr: number[]): number {
    return arr.reduce((acc, num) => acc + num, 0);
  }

  multiplyTwoNumber(a: number, b: number): number {
    return a * b;
  }

  multiplyArray(arr: number[]): number {
    return arr.reduce((total, num) => total * num, 1);
  }

  convertCurrency(currency: string): number {
    switch (currency) {
      case "USD":
        return 1;
      case "VND":
        return 1 / 25;
      case "EUR":
        return 1.1;
      default:
        return 0.0092;
    }
  }
}
