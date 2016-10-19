import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import { TournamentBrowserRoutingComponent } from './tournament-browser-routing/tournament-browser-routing.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingComponent,
    TournamentBrowserRoutingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
