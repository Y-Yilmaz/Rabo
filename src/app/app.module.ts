import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProductsService } from './products/services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomerListComponent } from './costomer/components/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './costomer/components/customer-details/customer-details.component';
import { CustomersService } from './costomer/services/customers.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductListComponent,
    CustomerListComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductsService, CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
