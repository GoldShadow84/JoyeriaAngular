import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JeweryAboutComponent } from './jewery-about/jewery-about.component';
import { JeweryJewelsComponent } from './jewery-jewels/jewery-jewels.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'beers',
      pathMatch: 'full',
    },
    {
     path: 'beers',
     component: JeweryJewelsComponent
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