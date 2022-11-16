import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JewelersListComponent } from './jewelers-list/jewelers-list.component';

import { FormsModule } from '@angular/forms';
import { JeweryAboutComponent } from './jewery-about/jewery-about.component';
import { JeweryJewelsComponent } from './jewery-jewels/jewery-jewels.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing-module';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    JewelersListComponent,
    JeweryAboutComponent,
    JeweryJewelsComponent,
    CartComponent,
    InputIntegerComponent
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
