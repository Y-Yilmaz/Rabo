import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';
import { Customer } from '../models/cutomer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
private _jsonURL = 'assets/mock-customers.json';

  constructor(private http: HttpClient) {   
  }

  public getCustomers() : Observable<Customer[]>{
    return this.http.get<Customer[]>(this._jsonURL);
  }

  public getCustomerById(id: number): Observable<Customer | undefined>{
    return this.getCustomers().pipe(
      map((customers) => customers.find(customer => customer.id === id))
    );
  }
}
