import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ManagementCustomerComponent } from './components/management-customer/management-customer.component';


@NgModule({
  declarations: [
    ManagementCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
