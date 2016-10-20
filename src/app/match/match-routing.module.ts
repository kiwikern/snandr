import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatchListComponent } from './list/match-list.component';
import { MatchEditComponent }  from './edit/match-edit.component';

export const routes: Routes = [
  { path: 'matches', component: MatchListComponent },
  { path: 'matches/edit', component: MatchEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
