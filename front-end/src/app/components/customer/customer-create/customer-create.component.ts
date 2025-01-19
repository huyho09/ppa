import { Component } from '@angular/core';
import { CustomerServiceService } from '../service/customer-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

interface Customer {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  gender: string;
  email: string;
}
@Component({
  selector: 'app-customer-create',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './customer-create.component.html',
  styleUrl: './customer-create.component.scss'
})
export class CustomerCreateComponent {
  constructor(
    private CustomerService: CustomerServiceService,
    private router: Router,
  ) {}

  customers: Customer[] = []
  customer : Customer = {
    id: '',
    avatar: '',
    firstname: '',
    lastname: '',
    gender: '',
    email: ''
  }
  addCustomer(){
    this.CustomerService.createCustomer(this.customer).subscribe(
      (customer) => {
        this.customers.push(customer)
        this.customer = {
          id: '',
          avatar: '',
          firstname: '',
          lastname: '',
          gender: '',
          email: ''
        }
        this.router.navigate(['/dashboard/customer'])

      }
    )
  }

}
