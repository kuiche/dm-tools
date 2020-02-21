import { NgModule } from '@angular/core';
import { DmPointbuyComponent } from './dm-pointbuy.component';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DmPointbuyComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [DmPointbuyComponent]
})
export class DmPointbuyModule { }
