import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserDisplayComponent } from './display/user-display.component';
import { UserEditComponent } from './edit/user-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserComponent,
    UserDisplayComponent,
    UserEditComponent
  ]
})
export class UserModule { }
