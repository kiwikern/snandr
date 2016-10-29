import {Component, EventEmitter, OnChanges} from '@angular/core';
import {User} from '../user';
import {Input, Output} from '@angular/core/src/metadata/directives';
import {FabButtonConfiguration} from '../../fab/fab.component';

@Component({
  selector: 'snandr-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnChanges {

  @Input()
  user: User;
  @Output()
  saveEvent = new EventEmitter<SaveEvent>();
  _user: User = User.getNullUser();
  isEditPicture = false;
  fabConfig: FabButtonConfiguration = {
    mainButton: {
      icon: 'done',
      type: 'submit'
    },
    secondaryButton: {
      icon: 'cancel',
      type: 'button'
    }
  };

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
