import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {User} from '../user';
import {Input} from '@angular/core/src/metadata/directives';
import {Subject} from 'rxjs';

@Component({
  selector: 'snandr-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnChanges {

  @Input()
  user: User;
  private _user: User = this.user;

  getFriendsCount(): number {
    if (this.user && this.user.friends) {
      return this.user.friends.length;
    } else {
      return 0;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('user')) {
      this._user = changes['user'].currentValue;
    }
  }
}
