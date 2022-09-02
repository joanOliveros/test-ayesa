import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

// TODO: Import of moduls
import { SharedModule } from '../../shared/shared.module';

// TODO: Import of components
import { MasterComponent } from './components/master/master.component';


@NgModule({
  declarations: [
    MasterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
