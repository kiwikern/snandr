import {Component, EventEmitter} from '@angular/core';
import {User} from '../user';
import {Input, Output} from '@angular/core/src/metadata/directives';

@Component({
  selector: 'snandr-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {

  @Input()
  private user: User;
  @Output()
  private saveEvent = new EventEmitter<SaveEvent>();

  onSubmit() {
    this.saveEvent.emit({user: this.user, doSave: true});
  }

  onCancel() {
    this.saveEvent.emit({user: this.user, doSave: false});
  }

}

export interface SaveEvent {
  user: User;
  doSave: boolean;
}
