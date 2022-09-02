import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManagementGalleryComponent } from './components/management-gallery/management-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementGalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
