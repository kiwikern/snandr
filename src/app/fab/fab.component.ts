import {Component, EventEmitter, trigger, transition, animate, state, style} from '@angular/core';
import {Input, Output} from '@angular/core/src/metadata/directives';

@Component({
  selector: 'snandr-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.sass'],
  animations: [
    trigger('showSecondary', [
      state('in', style({bottom: '115px', opacity: 1})),
      transition(':enter', animate('200ms ease')),
      transition(':leave', animate('300ms ease-out'))
    ])
  ]
})
export class FabComponent {

  @Input()
  configuration: FabButtonConfiguration;
  @Input()
  showSecondaryActions: boolean = true;
  @Output()
  mainAction: EventEmitter<any> = new EventEmitter();
  @Output()
  secondaryAction: EventEmitter<any> = new EventEmitter();

}
export interface FabButtonConfiguration {
  mainButton: FabButton;
  secondaryButton?: FabButton;
}

interface FabButton {
  icon: string;
  type?: string;
}
