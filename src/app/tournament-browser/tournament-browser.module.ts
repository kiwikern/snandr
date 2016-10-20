import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentBrowserRoutingModule } from './tournament-browser-routing.module';

import { TournamentBrowserComponent } from './tournament-browser.component';

@NgModule({
  imports: [
    CommonModule,
    TournamentBrowserRoutingModule
  ],
  declarations: [TournamentBrowserComponent]
})
export class TournamentBrowserModule { }
