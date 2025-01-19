import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../service/customer-service.service';
import { ActivatedRoute, Router } from '@angular/router';
interface Customer {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  gender: string;
  email: string;
}
@Component({
  selector: 'app-customer-delete',
  imports: [],
  templateUrl: './customer-delete.component.html',
  styleUrl: './customer-delete.component.scss'
})
export class CustomerDeleteComponent implements OnInit{
customer: Customer = {
  id: '',
  avatar: '',
  firstname: '',
  lastname: '',
  gender: '',
  email: ''
}
constructor(
  private customerService: CustomerServiceService,
  private route: ActivatedRoute,
  private router: Router,
){}
ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id)
    {
      const deleteCustomer = this.customerService.getCustomerById(id)
      this.router.navigate(['/dashboard/customer'])
      this.customerService.deleteCustomer(deleteCustomer.id).subscribe()
    }
}

}
