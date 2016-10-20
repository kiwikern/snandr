import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { MatchService } from '../match.service';

@Component({
  selector: 'snandr-match-browser',
  templateUrl: './match-browser.component.html',
  styleUrls: ['./match-browser.component.css']
})
export class MatchBrowserComponent implements OnInit {

  public matches: Match[];

  constructor(private service: MatchService) {
    this.matches = service.getMatches();
  }

  ngOnInit() {
  }

}
