import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileIconComponent } from './profileicon.component';
import {MaterialModule} from '@angular/material';
import {ProfileIconService} from './profileicon.service';
import {PerfectScrollbarModule} from 'angular2-perfect-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PerfectScrollbarModule
  ],
  providers: [ProfileIconService],
  declarations: [ProfileIconComponent],
  exports: [ProfileIconComponent]
})
export class ProfileIconModule { }
