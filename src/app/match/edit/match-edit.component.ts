import {Match} from '../match';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'snandr-match-edit',
  templateUrl: './match-edit.component.html',
  styleUrls: ['./match-edit.component.css']
})
export class MatchEditComponent implements OnInit {
  public match: Match;

  constructor() {
    if (this.match == null) {
      let today: Date = new Date();
      this.match = new Match('', today, today, 5, []);
    }
  }

  ngOnInit() {
  }

  onSubmit() {

  }

}
