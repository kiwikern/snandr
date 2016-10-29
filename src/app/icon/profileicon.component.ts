import {Component, EventEmitter} from '@angular/core';
import {ProfileIconService} from './profileicon.service';
import {Output} from '@angular/core/src/metadata/directives';

@Component({
  selector: 'snandr-icon',
  templateUrl: './profileicon.component.html',
  styleUrls: ['./profileicon.component.css']
})
export class ProfileIconComponent {

  @Output()
  selectedEvent: EventEmitter<string> = new EventEmitter();
  animalIcons: string[] = [];
  personIcons: string[] = [];
  basePath: string = 'http://localhost:3000/icons/';

  constructor(private service: ProfileIconService) {
    service.getAnimalIcons().then((icons) => this.animalIcons = icons);
    service.getPersonIcons().then((icons) => this.personIcons = icons);
  }

  onSelect(path: string) {
    this.selectedEvent.emit(path);
  }
}
