import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedModule } from './shared-module/shared-module.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,

      SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
