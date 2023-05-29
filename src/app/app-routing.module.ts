import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { CustomerListComponent } from './costomer/components/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './costomer/components/customer-details/customer-details.component';

const routes: Routes = [
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'customer-details/:id', component: CustomerDetailsComponent },
  { path: '', component: CustomerListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
