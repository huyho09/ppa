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
import { BillingInterface } from "../../dtos/billing-dto";

@Component({
  selector: 'app-billing',
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, CommonModule, NgxDatatableModule
    , FormsModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss'
})
export class BillingComponent {
  billings: BillingInterface[] = [{
    BilllingId: 1,
    Team: "OPM31",
    Team_CF: "OPM31",
    Sub_Team: "L1L2",
    Sub_Team_CF: "Data Engineer & IT Consultant, Business Analyst, UI/UX, Process Consultant",
    Sub_Project: "Project 1",
    Emp_ID: 33911001,
    Employee_Name: "Nguyen Van A 01",
    PIF_ID: "MS-300001",
    Rev_Source: "Bosch BD",
    Cus_Div: "BD",
    Cus_Div_CF: "BD",
    DI: "Direct",
    MCR: "Non MCR",
    Onsite_Nearshore_Offshore: "Nearshore",
    Cus_Country: "CN",
    Cus_Country_CF: "Others",
    Contract_Type: "Service Based",
    Rate_In_Billing: 9000,
    CONV: "USD",
    Plan_1: 0.5,
    Billed_1: 0,
    Unbilled_SAP_1: 0,
    Unbilled_No_PO_1: 0,
    Other_Rev_1: 0,

    Plan_2: 0.5,
    Billed_2: 0,
    Unbilled_SAP_2: 0,
    Unbilled_No_PO_2: 0,
    Other_Rev_2: 0,

    Plan_3: 0.5,
    Billed_3: 0,
    Unbilled_SAP_3: 0,
    Unbilled_No_PO_3: 0,
    Other_Rev_3: 0,

    Plan_4: 0.5,
    Billed_4: 0,
    Unbilled_SAP_4: 0,
    Unbilled_No_PO_4: 0,
    Other_Rev_4: 0,

    Plan_5: 0.5,
    Billed_5: 0,
    Unbilled_SAP_5: 0,
    Unbilled_No_PO_5: 0,
    Other_Rev_5: 0,

    Plan_6: 0.5,
    Billed_6: 0,
    Unbilled_SAP_6: 0,
    Unbilled_No_PO_6: 0,
    Other_Rev_6: 0,

    Plan_7: 0.5,
    Billed_7: 0,
    Unbilled_SAP_7: 0,
    Unbilled_No_PO_7: 0,
    Other_Rev_7: 0,

    Plan_8: 0.5,
    Billed_8: 0,
    Unbilled_SAP_8: 0,
    Unbilled_No_PO_8: 0,
    Other_Rev_8: 0,

    Plan_9: 0.5,
    Billed_9: 0,
    Unbilled_SAP_9: 0,
    Unbilled_No_PO_9: 0,
    Other_Rev_9: 0,

    Plan_10: 0.5,
    Billed_10: 0,
    Unbilled_SAP_10: 0,
    Unbilled_No_PO_10: 0,
    Other_Rev_10: 0,

    Plan_11: 0.5,
    Billed_11: 0,
    Unbilled_SAP_11: 0,
    Unbilled_No_PO_11: 0,
    Other_Rev_11: 0,

    Plan_12: 0.5,
    Billed_12: 0,
    Unbilled_SAP_12: 0,
    Unbilled_No_PO_12: 0,
    Other_Rev_12: 0,
  },
  {
    BilllingId: 2,
    Team: "OPM31",
    Team_CF: "OPM31",
    Sub_Team: "L1L2",
    Sub_Team_CF: "Data Engineer & IT Consultant, Business Analyst, UI/UX, Process Consultant",
    Sub_Project: "Project 2",
    Emp_ID: 33911001,
    Employee_Name: "Nguyen Van A 02",
    PIF_ID: "MS-300001",
    Rev_Source: "Bosch BD",
    Cus_Div: "BD",
    Cus_Div_CF: "BD",
    DI: "Direct",
    MCR: "Non MCR",
    Onsite_Nearshore_Offshore: "Nearshore",
    Cus_Country: "CN",
    Cus_Country_CF: "Others",
    Contract_Type: "Service Based",
    Rate_In_Billing: 9000,
    CONV: "USD",
    Plan_1: 0.5,
    Billed_1: 0,
    Unbilled_SAP_1: 0,
    Unbilled_No_PO_1: 0,
    Other_Rev_1: 0,

    Plan_2: 0.5,
    Billed_2: 0,
    Unbilled_SAP_2: 0,
    Unbilled_No_PO_2: 0,
    Other_Rev_2: 0,

    Plan_3: 0.5,
    Billed_3: 0,
    Unbilled_SAP_3: 0,
    Unbilled_No_PO_3: 0,
    Other_Rev_3: 0,

    Plan_4: 0.5,
    Billed_4: 0,
    Unbilled_SAP_4: 0,
    Unbilled_No_PO_4: 0,
    Other_Rev_4: 0,

    Plan_5: 0.5,
    Billed_5: 0,
    Unbilled_SAP_5: 0,
    Unbilled_No_PO_5: 0,
    Other_Rev_5: 0,

    Plan_6: 0.5,
    Billed_6: 0,
    Unbilled_SAP_6: 0,
    Unbilled_No_PO_6: 0,
    Other_Rev_6: 0,

    Plan_7: 0.5,
    Billed_7: 0,
    Unbilled_SAP_7: 0,
    Unbilled_No_PO_7: 0,
    Other_Rev_7: 0,

    Plan_8: 0.5,
    Billed_8: 0,
    Unbilled_SAP_8: 0,
    Unbilled_No_PO_8: 0,
    Other_Rev_8: 0,

    Plan_9: 0.5,
    Billed_9: 0,
    Unbilled_SAP_9: 0,
    Unbilled_No_PO_9: 0,
    Other_Rev_9: 0,

    Plan_10: 0.5,
    Billed_10: 0,
    Unbilled_SAP_10: 0,
    Unbilled_No_PO_10: 0,
    Other_Rev_10: 0,

    Plan_11: 0.5,
    Billed_11: 0,
    Unbilled_SAP_11: 0,
    Unbilled_No_PO_11: 0,
    Other_Rev_11: 0,

    Plan_12: 0.5,
    Billed_12: 0,
    Unbilled_SAP_12: 0,
    Unbilled_No_PO_12: 0,
    Other_Rev_12: 0,
  }];
  isEdit: boolean = false;

  ngOnInit() {
    // Initialize DataTables on a table element after the view is initialized
    $(document).ready(function () {
      $('#example').dataTable({
        "sScrollX": "100%",
        "sScrollXInner": "110%",
        "bInfo": false,
        "paging": false,
        "bPaginate": false,
      });
    });
    this.loadBillingsFromLocalStorage()
  }

  constructor(private formBuilder: UntypedFormBuilder, private cdRef: ChangeDetectorRef, private router: Router) { }

  loadBillingsFromLocalStorage() {
    const storedBillings = localStorage.getItem('billings');
    if (storedBillings && storedBillings != null) {
      this.billings = JSON.parse(storedBillings);
    } else {
      this.saveBillingsToLocalStorage
    }
  }

  saveBillingsToLocalStorage() {
    localStorage.setItem('billings', JSON.stringify(this.billings));
  }

  onChangeFields(billingID: number, event: Event | null) {
    const billing = this.billings.find(emp => emp.BilllingId === billingID);
    if(billing && event?.target){
      this.cdRef.detectChanges();
      this.saveBillingsToLocalStorage();
    }
  }

  onEditRecord() {
    this.isEdit = !this.isEdit;
    this.cdRef.detectChanges();
  }

  sumArrayNumber(arr: number[]): number {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  sumArrayByAtribute(attribute: keyof BillingInterface): number {
    if (!this.billings || this.billings.length === 0) {
      return 0;
    }
  
    return this.billings
      .map(item => Number(item[attribute]) || 0)
      .reduce((acc, num) => acc + num, 0);
  }

  sumPlanRev(attribute: keyof BillingInterface): number {
    if (!this.billings || this.billings.length === 0) {
      return 0;
    }
    var mapData =  this.billings.map(item => Number(item[attribute]) * (item.Rate_In_Billing * this.convertCurrency(item.CONV)) || 0)
    return mapData.reduce((acc, num) => acc + num, 0);
  }

  sumTotalPMO(): number{
    if (!this.billings || this.billings.length === 0) {
      return 0;
    }
    var mapData = this.billings.map(item => this.sumArrayNumber([item.Plan_1, item.Plan_2, item.Plan_3, item.Plan_4,
      item.Plan_5, item.Plan_6, item.Plan_7, item.Plan_8, item.Plan_9, item.Plan_10, item.Plan_11, item.Plan_12]) || 0)
    return mapData.reduce((acc, num) => acc + num, 0);
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

  handleCreateBillings() {
    this.saveBillingsToLocalStorage();
    this.router.navigate(['/billing-create']);
  }

}
