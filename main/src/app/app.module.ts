import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from '../../../template/src/app/shared-module/shared-module.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      //MatButtonModule,
      SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
//platformBrowserDynamic().bootstrapModule(AppModule);
