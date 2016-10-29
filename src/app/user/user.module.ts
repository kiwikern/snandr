import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDisplayComponent} from './display/user-display.component';
import {UserEditComponent} from './edit/user-edit.component';
import {UserService} from './user.service';
import {UserRoutingModule} from './user-routing.module';
import {MaterialModule} from '@angular/material';
import {UserComponent} from './user.component';
import {FormsModule} from '@angular/forms';
import {ProfileIconModule} from '../icon/profileicon.module';
import {SimpleNotificationsModule} from 'angular2-notifications';
import { FriendlistComponent } from './friendlist/friendlist.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ProfileIconModule,
    UserRoutingModule,
    SimpleNotificationsModule
  ],
  providers: [
    UserService
  ],
  declarations: [
    UserDisplayComponent,
    UserEditComponent,
    UserComponent,
    FriendlistComponent
  ]
})
export class UserModule {
}
