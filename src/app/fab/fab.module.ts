import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FabComponent} from './fab.component';
import {MaterialModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    FabComponent
  ],
  declarations: [FabComponent]
})
export class FabModule {
}
