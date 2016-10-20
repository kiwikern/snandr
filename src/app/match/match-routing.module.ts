import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatchBrowserComponent } from './browser/match-browser.component';

export const routes: Routes = [
  { path: 'match-browser', component: MatchBrowserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
