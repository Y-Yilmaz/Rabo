import { Component } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Customer } from '../../models/cutomer';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  public customers: Customer[] =  [];
  constructor(private customersService: CustomersService){
    this.customersService.getCustomers().subscribe({
    next: (response: Customer[]) =>{
      this.customers = response;
    }
  })
}
}