import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RowComponent, ColComponent
} from '@coreui/angular';
import { Router } from '@angular/router';
import { BillingInterface } from "../../../dtos/billing-dto";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-billing-create',
  imports: [CommonModule, FormsModule, RowComponent, ColComponent],
  templateUrl: './billing-create.component.html',
  styleUrl: './billing-create.component.scss'
})
export class BillingCreateComponent {
  billing: BillingInterface = {
    BilllingId: Math.floor(Math.random() * 10000),
    Team: "OPM31",
    Team_CF: "OPM31",
    Sub_Team: "",
    Sub_Team_CF: "",
    Sub_Project: "",
    Emp_ID: 0,
    Employee_Name: "",
    PIF_ID: "",
    Rev_Source: "",
    Cus_Div: "",
    Cus_Div_CF: "",
    DI: "Direct",
    MCR: "Non MCR",
    Onsite_Nearshore_Offshore: "Nearshore",
    Cus_Country: "",
    Cus_Country_CF: "",
    Contract_Type: "",
    Rate_In_Billing: 0,
    CONV: "USD",
    Plan_1: 0,
    Billed_1: 0,
    Unbilled_SAP_1: 0,
    Unbilled_No_PO_1: 0,
    Other_Rev_1: 0,

    Plan_2: 0,
    Billed_2: 0,
    Unbilled_SAP_2: 0,
    Unbilled_No_PO_2: 0,
    Other_Rev_2: 0,

    Plan_3: 0,
    Billed_3: 0,
    Unbilled_SAP_3: 0,
    Unbilled_No_PO_3: 0,
    Other_Rev_3: 0,

    Plan_4: 0,
    Billed_4: 0,
    Unbilled_SAP_4: 0,
    Unbilled_No_PO_4: 0,
    Other_Rev_4: 0,

    Plan_5: 0,
    Billed_5: 0,
    Unbilled_SAP_5: 0,
    Unbilled_No_PO_5: 0,
    Other_Rev_5: 0,

    Plan_6: 0,
    Billed_6: 0,
    Unbilled_SAP_6: 0,
    Unbilled_No_PO_6: 0,
    Other_Rev_6: 0,

    Plan_7: 0,
    Billed_7: 0,
    Unbilled_SAP_7: 0,
    Unbilled_No_PO_7: 0,
    Other_Rev_7: 0,

    Plan_8: 0,
    Billed_8: 0,
    Unbilled_SAP_8: 0,
    Unbilled_No_PO_8: 0,
    Other_Rev_8: 0,

    Plan_9: 0,
    Billed_9: 0,
    Unbilled_SAP_9: 0,
    Unbilled_No_PO_9: 0,
    Other_Rev_9: 0,

    Plan_10: 0,
    Billed_10: 0,
    Unbilled_SAP_10: 0,
    Unbilled_No_PO_10: 0,
    Other_Rev_10: 0,

    Plan_11: 0,
    Billed_11: 0,
    Unbilled_SAP_11: 0,
    Unbilled_No_PO_11: 0,
    Other_Rev_11: 0,

    Plan_12: 0,
    Billed_12: 0,
    Unbilled_SAP_12: 0,
    Unbilled_No_PO_12: 0,
    Other_Rev_12: 0,
  }

  constructor(private router: Router) { }
  onChange(field: string, event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    console.log('Current form data:', this.billing);
  }
  handleCancel() {
    this.router.navigate(['/billing']);
  }
  handleSubmit() {
    const storedBillings = localStorage.getItem('billings');
    if (storedBillings) {
      var billings: BillingInterface[] = JSON.parse(storedBillings);
      billings = [...billings, this.billing];
      localStorage.setItem('billings', JSON.stringify(billings));
    }
    this.router.navigate(['/billing']);
  }
}
