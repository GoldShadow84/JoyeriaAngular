import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JeweryAboutComponent } from './jewery-about/jewery-about.component';
import { JeweryJewelsComponent } from './jewery-jewels/jewery-jewels.component';
import { JeweryProductsComponent } from './jewery-products/jewery-products.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
     path: 'home',
     component: JeweryJewelsComponent
    },
    {
     path: 'products',
     component: JeweryProductsComponent
    },
    {
      path: 'about',
      component: JeweryAboutComponent
     },
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }