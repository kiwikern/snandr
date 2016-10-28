import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDisplayComponent} from './display/user-display.component';
import {UserEditComponent} from './edit/user-edit.component';
import {UserService} from './user.service';
import {UserRoutingModule} from './user-routing.module';
import {MaterialModule} from '@angular/material';
import {UserComponent} from './user.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    UserRoutingModule
  ],
  providers: [
    UserService
  ],
  declarations: [
    UserDisplayComponent,
    UserEditComponent,
    UserComponent
  ]
})
export class UserModule {
}
