import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchBrowserRoutingModule } from './match-browser-routing.module';
import { MaterialModule } from '@angular/material';

import { MatchBrowserComponent } from './match-browser.component';

@NgModule({
  imports: [
    CommonModule,
    MatchBrowserRoutingModule,
    MaterialModule.forRoot(),
  ],
  declarations: [MatchBrowserComponent]
})
export class MatchBrowserModule { }
