import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerServiceService } from '../service/customer-service.service';

interface Customer {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  gender: string;
  email: string;
}
@Component({
  selector: 'app-customer-index',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './customer-index.component.html',
  styleUrl: './customer-index.component.scss'
})
export class CustomerIndexComponent implements OnInit {

  customers: Customer[] = []
  constructor(private customerService: CustomerServiceService)
  {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(
      (data: Customer[]) => {
        this.customers = data
      }
    )
}
}
