import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private _jsonURL = 'assets/mock-products.json';

  constructor(private http: HttpClient) {   
  }

  public getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(this._jsonURL);
  }

  public getProductById(ids: number []): Observable<Product[] | undefined>{
    return this.getProducts().pipe(
      map((products) => products.filter(product => ids.find(id => id == product.ProductId)))
    );
  }
}
