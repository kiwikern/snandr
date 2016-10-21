import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../match';

@Component({
  selector: 'snandr-match-display',
  templateUrl: './match-display.component.html',
  styleUrls: ['./match-display.component.css']
})
export class MatchDisplayComponent implements OnInit {

  @Input()
  public match: Match;
  constructor() { }

  ngOnInit() {
  }

  openMatch() {

  }
}
