import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JewelersListComponent } from './jewelers-list/jewelers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JewelersListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
