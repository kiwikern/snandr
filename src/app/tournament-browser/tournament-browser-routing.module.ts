import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TournamentBrowserComponent } from './tournament-browser.component';

export const routes: Routes = [
  { path: 'tournament-browser', component: TournamentBrowserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentBrowserRoutingModule { }
