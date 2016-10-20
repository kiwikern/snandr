import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { MatchService } from '../match.service';

@Component({
  selector: 'snandr-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  public matches: Match[];

  constructor(private service: MatchService) {
    this.matches = service.getMatches();
  }

  ngOnInit() {
  }

}
