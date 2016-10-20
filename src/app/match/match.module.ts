import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchRoutingModule } from './match-routing.module';
import { MaterialModule } from '@angular/material';

import { MatchBrowserComponent } from './browser/match-browser.component';
import { MatchEditComponent } from './edit/match-edit.component';

@NgModule({
  imports: [
    CommonModule,
    MatchRoutingModule,
    MaterialModule.forRoot(),
  ],
  declarations: [
    MatchBrowserComponent,
    MatchEditComponent
  ]
})
export class MatchModule { }
