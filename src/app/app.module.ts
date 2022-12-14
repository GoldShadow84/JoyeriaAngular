import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { JeweryJewelsComponent } from './jewery-jewels/jewery-jewels.component';
import { AppRoutingModule } from './app-routing-module';
import { JeweryProductsComponent } from './jewery-products/jewery-products.component';
import { JeweryAboutComponent } from './jewery-about/jewery-about.component';
import { JeweryHomeComponent } from './jewery-home/jewery-home.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    JeweryJewelsComponent,
    JeweryProductsComponent,
    JeweryAboutComponent,
    JeweryHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

