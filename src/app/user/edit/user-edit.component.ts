import {Component, EventEmitter, OnChanges} from '@angular/core';
import {User} from '../user';
import {Input, Output} from '@angular/core/src/metadata/directives';

@Component({
  selector: 'snandr-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnChanges {

  @Input()
  user: User;
  @Output()
  private saveEvent = new EventEmitter<SaveEvent>();
  private _user: User;
  private isEditPicture = false;

  ngOnChanges(changes: any) {
    let userChanges = changes.user.currentValue;
    if (userChanges) {
      this._user = Object.assign({}, userChanges);
    }
  }

  onSubmit() {
    this.saveEvent.emit({user: this._user, doSave: true});
  }

  onCancel() {
    this.saveEvent.emit({user: this._user, doSave: false});
  }

  onSelectImage(path: string) {
    this._user.profilePicture = path;
    this.isEditPicture = false;
  }

}

export interface SaveEvent {
  user: User;
  doSave: boolean;
}
