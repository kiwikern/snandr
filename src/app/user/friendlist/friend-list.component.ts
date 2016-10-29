import {Component, OnChanges} from '@angular/core';
import {UserService} from '../user.service';
import {Input} from '@angular/core/src/metadata/directives';
import {User} from '../user';
import {Observable} from 'rxjs';
import {merge} from 'rxjs/operator/merge';

@Component({
  selector: 'snandr-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnChanges {

  @Input()
  userIds: string[] = [];
  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnChanges(changes: any) {
    this.userIds = changes.userIds.currentValue;
    if (Array.isArray(this.userIds)) {
      // let observables: Observable<User[]> = merge(...this.userIds.map((id) => this.userService.getUser(id))) as Observable<User[]>;
      let observables: Observable<User>[] = this.userIds.map((id) => this.userService.getUser(id));
      observables.forEach(
        ob => ob.subscribe(
          user => this.users.push(user),
          error => console.log(error))
      );
    }
  }

}
