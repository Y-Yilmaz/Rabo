import { Component, Inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  public products: Product[] = [];

  constructor(private productsService: ProductsService){
  this.productsService.getProducts().subscribe({
    next: (response) =>{
      this.products = response;
    }
  })
} 
}
