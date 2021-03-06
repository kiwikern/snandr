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
import { FriendListComponent } from './friendlist/friend-list.component';
import {FabModule} from '../fab/fab.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ProfileIconModule,
    UserRoutingModule,
    SimpleNotificationsModule,
    FabModule
  ],
  providers: [
    UserService
  ],
  declarations: [
    UserDisplayComponent,
    UserEditComponent,
    UserComponent,
    FriendListComponent,
    LoginComponent
  ]
})
export class UserModule {
}
