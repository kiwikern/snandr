import {Component} from '@angular/core';
import {User} from '../user';
import {Input} from '@angular/core/src/metadata/directives';

@Component({
  selector: 'snandr-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent {

  @Input()
  user: User;

  getFriendsCount(): number {
    if (this.user.friends) {
      return this.user.friends.length;
    } else {
      return 0;
    }
  }
}
