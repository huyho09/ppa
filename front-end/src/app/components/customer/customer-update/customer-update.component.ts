import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { CustomerServiceService } from '../service/customer-service.service';
interface Customer {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
}
@Component({
  selector: 'app-customer-update',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './customer-update.component.html',
  styleUrl: './customer-update.component.scss'
})
export class CustomerUpdateComponent implements OnInit {
customer: Customer = {
  id: '',
  firstname: '',
  lastname: '',
  email: ''
}
id : string = '';
constructor(
  private customerService: CustomerServiceService,
  private route: ActivatedRoute,
  private router: Router,
)
{}
ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if(id)
    {
      this.customerService.getCustomerByIdWithApiCall(id).subscribe(
        (data) => {
          this.customer = data
          this.id = this.customer.id
        }
      )
    }
}
updateCustomer () {
  this.customerService.updateCustomerWithApiCall(this.id,this.customer).subscribe(
    () => {
      this.router.navigate(['/dashboard/customer'])
    }
  )
}
}
