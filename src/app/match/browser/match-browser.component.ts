import { Component, OnInit } from '@angular/core';
import { Match } from '../match';

@Component({
  selector: 'app-match-browser',
  templateUrl: './match-browser.component.html',
  styleUrls: ['./match-browser.component.css']
})
export class MatchBrowserComponent implements OnInit {

  public matches: Match[];

  constructor() { }

  ngOnInit() {
  }

}
