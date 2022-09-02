import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// TODO: Import components
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { CustumerComponent } from './custumer/custumer.component';
import { GalleryComponent } from './gallery/gallery.component';



@NgModule({
  declarations: [
    HomeComponent,
    CustumerComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ]
})
export class FlexLayoutsModule { }
