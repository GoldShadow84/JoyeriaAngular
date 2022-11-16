import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JewelersListComponent } from './jewelers-list/jewelers-list.component';

import { FormsModule } from '@angular/forms';
import { JeweryJewelsComponent } from './jewery-jewels/jewery-jewels.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing-module';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { JeweryProductsComponent } from './jewery-products/jewery-products.component';
import { JeweryAboutComponent } from './jewery-about/jewery-about.component';

@NgModule({
  declarations: [
    AppComponent,
    JewelersListComponent,
    JeweryJewelsComponent,
    CartComponent,
    InputIntegerComponent,
    JeweryProductsComponent,
    JeweryAboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
