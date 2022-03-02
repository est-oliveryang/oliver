import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { EstechComponent } from './estech/estech.component';
import { ItriComponent } from './itri/itri.component';
import { SiucComponent } from './siuc/siuc.component';
import { PanasonicComponent } from './panasonic/panasonic.component';

@NgModule({
  declarations: [
    AppComponent,
    EstechComponent,
    ItriComponent,
    SiucComponent,
    PanasonicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
