import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UserService} from './user.service';
import {User} from './user';
import {SaveEvent} from './edit/user-edit.component';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'snandr-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  userId: string;
  isEditMode: boolean = false;

  constructor(private userService: UserService,
              private notificationService: NotificationsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.userId = params['id'];
    });
    this.route.queryParams.subscribe((params: Params) => {
      this.isEditMode = params['edit'] === 'true';
    });
    this.getUser();
  }

  startEdit() {
    this.isEditMode = true;
  }

  onSave(event: SaveEvent) {
    this.isEditMode = false;
    if (event.doSave) {
      this.saveUser(event.user);
      this.notificationService.success('Gespeichert', 'Benutzer wurde erfolgreich gespeichert.', {timeOut: 3000});
    } else {
      this.notificationService.info('Änderungen verworfen', 'Rückgängig machen (todo).', {timeOut: 3000});
    }
  }

  getUser() {
    this.userService.getUser(this.userId)
      .subscribe(
        user => this.user = user,
        error => this.notificationService.error('Ups!', 'Fehler: ' + error.toString()));
  }

  saveUser(user: User) {
    this.userService.saveUser(user)
      .subscribe(() => this.user = user);
    // todo: spinner -> confirmation/error
  }

  isEditable() {
    return !this.isEditMode;
  }

}
