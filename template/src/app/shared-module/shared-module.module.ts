import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from '../btn/btn.component';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
//import { NgDatepickerModule } from 'ng2-datepicker'; 

@NgModule({
  imports: [
      CommonModule,
      MatButtonModule,
      //NoopAnimationsModule
      //NgDatepickerModule
  ],
  declarations: [
      BtnComponent
  ],
  exports: [
      //CommonModule,
      //NgDatepickerModule,
      MatButtonModule,
      //NoopAnimationsModule,
      BtnComponent
  ]
})
export class SharedModule{ }
