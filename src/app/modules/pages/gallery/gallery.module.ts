import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { ManagementGalleryComponent } from './components/management-gallery/management-gallery.component';


@NgModule({
  declarations: [
    ManagementGalleryComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
