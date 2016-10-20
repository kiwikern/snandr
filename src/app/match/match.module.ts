import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchRoutingModule } from './match-routing.module';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { MatchBrowserComponent } from './browser/match-browser.component';
import { MatchEditComponent } from './edit/match-edit.component';

import { MatchService } from './match.service';

@NgModule({
  imports: [
    CommonModule,
    MatchRoutingModule,
    MaterialModule.forRoot(),
    FormsModule
  ],
  declarations: [
    MatchBrowserComponent,
    MatchEditComponent
  ],
  providers: [
    MatchService
  ]
})
export class MatchModule { }
