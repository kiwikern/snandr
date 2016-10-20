import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchRoutingModule } from './match-routing.module';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { MatchListComponent } from './list/match-list.component';
import { MatchEditComponent } from './edit/match-edit.component';
import { MatchDisplayComponent } from './display/match-display.component';

import { MatchService } from './match.service';

@NgModule({
  imports: [
    CommonModule,
    MatchRoutingModule,
    MaterialModule.forRoot(),
    FormsModule
  ],
  declarations: [
    MatchListComponent,
    MatchEditComponent,
    MatchDisplayComponent
  ],
  providers: [
    MatchService
  ]
})
export class MatchModule { }
