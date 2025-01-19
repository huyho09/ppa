import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

interface Customer {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  gender: string;
  email: string;
}
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http:HttpClient) {}

  private localStorageKey = 'customers'

  Customers: Customer[]= []

  getCustomers(): Observable<Customer[]>{
    const customers = this.getCustomerFromLocalStorage()
    return of(customers)
  }
  createCustomer(customer:any): Observable<Customer>{
    const customers = this.getCustomerFromLocalStorage()
    customer.id = uuidv4()
    if (customer.gender == "male")
    {
      customer.avatar = "/assets/data/Avatar.jpg"
    }
    else{
      customer.avatar = "/assets/data/women.jpg"
    }
    customers.push(customer)
    this.saveCustomerToLocalStorage(customers)
    return of(customers)
  }
  updateCustomer(id: string,updatedCustomer: any): Observable<Customer>{
    const customers = this.getCustomerFromLocalStorage()
    const customerIndex = customers.findIndex((customer: Customer) => customer.id === id);
    customers[customerIndex] = updatedCustomer
    this.saveCustomerToLocalStorage(customers)
    return of(customers[customerIndex])
  }
  
  deleteCustomer(id: string){
    const customers = this.getCustomerFromLocalStorage().filter((customer: Customer) => customer.id !== id)
    localStorage.setItem('customers',JSON.stringify(customers))
    return of(null)
   
  }
  getCustomerById(id: string) {
    const customers = this.getCustomerFromLocalStorage()
    return customers.find((customer: Customer) => customer.id === id)
  }

  getCustomerFromLocalStorage(){
    const customersJson = localStorage.getItem('customers')
    return customersJson ? JSON.parse(customersJson) : [] 
  }
  saveCustomerToLocalStorage(custmersJson: any[]) {
    const customer = JSON.stringify(custmersJson)
    localStorage.setItem('customers',customer)
  }
}
