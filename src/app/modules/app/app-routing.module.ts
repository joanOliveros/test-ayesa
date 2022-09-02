import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './flex-layouts/home/home.component'
import { CustumerComponent } from './flex-layouts/custumer/custumer.component';
import { GalleryComponent } from './flex-layouts/gallery/gallery.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () =>
      import('./../pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'custumer',
    component: CustumerComponent,
    loadChildren: () => import('../pages/customer/customer.module').then((m) => m.CustomerModule)
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    loadChildren: () => import('../pages/gallery/gallery.module').then((m) => m.GalleryModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
