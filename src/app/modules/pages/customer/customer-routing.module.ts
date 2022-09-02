import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManagementCustomerComponent } from './components/management-customer/management-customer.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
