import {Component} from '@angular/core';
import {FabButtonConfiguration} from '../../fab/fab.component';

@Component({
  selector: 'snandr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  fabConfig: FabButtonConfiguration = {
    mainButton: {
      icon: 'done',
      type: 'submit'
    }
  };

  constructor() {
  }

  doLogin() {

  }

}
