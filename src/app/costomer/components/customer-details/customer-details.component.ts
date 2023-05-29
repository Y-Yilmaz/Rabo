import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/cutomer';
import { Product } from 'src/app/products/models/product';
import { CustomersService } from '../../services/customers.service';
import { ProductsService } from 'src/app/products/services/products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { SALDOS } from 'src/assets/mock-saldos';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})

export class CustomerDetailsComponent implements OnInit {
  public customer: Customer | undefined ;
  public products: Product[] | undefined;
  constructor(private route: ActivatedRoute, private customersService: CustomersService, private productsService: ProductsService){
  }
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.customersService.getCustomerById(Number.parseInt( params.get('id')!)))).subscribe({
        next: (customer)=> {
          this.customer = customer;
          this.getProducts(this.customer?.productIds!);
        }
      });
      
  }

  private getProducts(ids: number []){
    this.productsService.getProductById(ids).subscribe({
      next: products =>{
        this.products = products;
        this.decorateProductWithSaldo(this.products!);
      }
    })
  }

  private decorateProductWithSaldo(products: Product[]){
    products.forEach(product => {
      let saldo = SALDOS.find(s => s.customerId == this.customer?.id)?.saldos.find(s => s.productId == product.ProductId)?.saldo;
      product.Saldo = saldo!;
    })
  }
}
