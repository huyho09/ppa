import { Component, ChangeDetectorRef, signal } from '@angular/core';
import {
  RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, ButtonCloseDirective,
  ButtonDirective, ModalBodyComponent, ModalComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, ThemeDirective,
  ToastBodyComponent, ToastComponent, ToasterComponent,
} from '@coreui/angular';
import { FormsModule, UntypedFormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
declare var $: any;
import { Router } from '@angular/router';
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { BillingInterface } from "../../dtos/billing-dto";
import { BillingComponentDAL, TableData, ColumnValue } from '../../models/systems/blling-component';
import billingStructureData from '../../../assets/jsons/billing-data.json'
import colorPalettesData from '../../../assets/jsons/color-palettes.json'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-billing',
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, CommonModule, NgxDatatableModule, ToastBodyComponent, ToastComponent, ToasterComponent,
    FormsModule, MatSelectModule, MatFormFieldModule, ButtonCloseDirective, ButtonDirective, ModalBodyComponent, ModalComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, ThemeDirective, MatProgressSpinnerModule],
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
  isSavedValue: boolean = false;
  currentItemId = 0;

  position = 'top-center';
  visibleToast = signal(false);
  percentage = signal(0);
  currentUrl = '';

  public billingComponentModel = billingStructureData;
  public colorPalettes: any[] = colorPalettesData;
  GroupColumns: ColumnValue[] = billingStructureData.TableCalcPMO.GroupColumns;
  isLoading: boolean = false;

  toggleToast() {
    this.visibleToast.update((value) => !value);
  }

  onVisibleChange($event: boolean) {
    this.visibleToast.set($event);
    this.percentage.set(this.visibleToast() ? this.percentage() : 0);
  }

  onTimerChange($event: number) {
    this.percentage.set($event * 25);
  }

  public table: any;

  ngOnInit() {
    this.loadBillingsFromLocalStorage();
    // Initialize DataTables on a table element after the view is initialized
    $(document).ready(function () {
      $('#example').dataTable({
        "sScrollX": "100%",
        "sScrollXInner": "110%",
        "bInfo": false,
        "paging": false,
        "bPaginate": false,
        "bDestroy": true
      });
    });
    
    console.log(this.billingComponentModel?.TableCalcBilling?.GroupColumns);
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
    if (billing && event?.target) {
      this.cdRef.detectChanges();
      this.saveBillingsToLocalStorage();
      this.toggleToast();
      $(event.target).closest("tr").find("input").removeClass("changed-cell");
      this.isSavedValue = true;
    }
  }
  onInputChange(event: Event) {
    (event.target as HTMLInputElement).classList.add("changed-cell");
  }
  onDeleteItem(billingID: number) {
    const billing = this.billings.find(emp => emp.BilllingId === billingID);
    if (billing) {
      this.cdRef.detectChanges();
      this.billings = this.billings.filter(x => x.BilllingId !== billingID);
      localStorage.setItem('billings', JSON.stringify(this.billings));
    }
    this.visible = false;
  }

  onEditRecord() {
    this.isEdit = !this.isEdit;
    this.cdRef.detectChanges();
    if(!this.isEdit){
      if (!this.isSavedValue) {
          window.location.reload();
      } 
      this.isSavedValue = false;    
    }
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
    var mapData = this.billings.map(item => Number(item[attribute]) * (item.Rate_In_Billing * this.convertCurrency(item.CONV)) || 0)
    return mapData.reduce((acc, num) => acc + num, 0);
  }

  sumTotalPMO(): number {
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
    //this.saveBillingsToLocalStorage();
    this.router.navigate(['/billing-create']);
  }

  public visible = false;

  toggleLiveDelete(billingID: number) {
    this.visible = true;
    this.currentItemId = billingID
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }
  toggleGroup(group: number, event: Event) {
    const target = $(event.currentTarget); // Get clicked element
    const $table = target.closest('table');

    if ($table.length === 0) {
      console.warn('No table found for the clicked element.');
      return;
    }

    // Ensure the table has an ID
    let tableId = $table.attr('id');
    if (!tableId) {
      tableId = 'datatable-' + new Date().getTime(); // Generate unique ID
      $table.attr('id', tableId); // Assign new ID
    }

    // Ensure DataTable is initialized
    // let dtTable = $.fn.dataTable.isDataTable('#' + tableId) ? $('#' + tableId).DataTable() : null;
    // if (!dtTable) {
    //   console.warn('DataTable is not initialized for table:', tableId);
    //   return;
    // }

    let dtTable = $('#' + tableId).DataTable({
      "deferRender": true, // Prevents rendering until needed
      "bInfo": false,      // Hide info text
      "paging": false,     // Disable pagination
      "ordering": false,   // Disable sorting
      "searching": false,  // Disable searching
      "processing": false, // Avoid unnecessary UI changes
      "retrieve": true,    // Prevent duplicate initialization
    });

    // var dtTable = new $.fn.dataTable.Api($('#' + tableId)); // Get API instance

    const $groupTHs = $table.find('thead tr:last() th:not([rowspan="2"])[data-group="' + group + '"]');
    if (target.find('i').hasClass('fa-plus-square')) {
      target.find('i').removeClass('fa-plus-square').addClass('fa-minus-square');
      target.closest('th').attr('colspan', target.attr('data-colspan'));
      // let dtTable = $('#' + tableId).DataTable();
      $groupTHs.not($groupTHs.first()).show().fadeIn(300);

      var hasColspan = false;
      $groupTHs.not($groupTHs.first()).each((i: number, element: HTMLElement) => {
        var tds = $table.find('tbody tr td:nth-child(' + (dtTable.columns(element)[0][0] + 1) + ')');
        console.log(tds);
        if (tds.filter("[colspan]").length > 0 && hasColspan === false) {
          hasColspan = true;
          tds.each((i: number, ele: HTMLElement) => {
            ele.style.display = 'table-cell';
          });
        }
        if (tds.length > 0) {
          tds.not(tds.first()).each((i: number, ele: HTMLElement) => {
            ele.style.display = 'table-cell';
          });
        }

      });
    } else {
      target.find('i').removeClass('fa-minus-square').addClass('fa-plus-square');
      target.closest('th').attr('colspan', 1);
      // let dtTable = $('#' + tableId).DataTable();
      $groupTHs.not($groupTHs.first()).hide().fadeOut(300);

      var hasColspan = false;
      $groupTHs.not($groupTHs.first()).each((i: number, element: HTMLElement) => {
        var tds = $table.find('tbody tr td:nth-child(' + (dtTable.columns(element)[0][0] + 1) + ')');
        console.log(tds);
        if (tds.filter("[colspan]").length > 0 && hasColspan === false) {
          hasColspan = true;

          tds.each((i: number, ele: HTMLElement) => {
            ele.style.display = 'none';
          });
        }
        if (tds.length > 0) {
          tds.not(tds.first()).each((i: number, ele: HTMLElement) => {
            ele.style.display = 'none';
          });
        }
      });
    }
  }

  getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * this.colorPalettes.length);
    return this.colorPalettes[randomIndex]?.color;
  }

  toggleGrouping(columns: number[]): void {
    // Record the start time
    // const startTime = performance.now();

    // Toggle visibility of group column
    this.isLoading = true; // Show the loading spinner
    // Loop through each column and toggle visibility
    setTimeout(() => {
      var table = $('#example').DataTable();
      // Temporarily disable redraw
      table.off('draw'); // Disable draw event to prevent reflow

      // Toggle visibility of all columns
      columns.forEach(colIndex => {
        const column = table.column(colIndex);
        column.visible(!column.visible());
      });

      // Enable redraw after all operations
      table.draw(); // Redraw the table only once
      table.on('draw', function () {
        // any logic that should run after the table is drawn (optional)
      });
      this.isLoading = false; // Hide the loading spinner when done
    }, 1000);

    // Record the end time
    // const endTime = performance.now();

    // Log the time it took to run
    // console.log(`toggleGrouping took ${endTime - startTime} milliseconds`);
  }
}