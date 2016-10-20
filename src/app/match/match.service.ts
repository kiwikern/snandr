import { Injectable } from '@angular/core';
import { Match } from './match';

@Injectable()
export class MatchService {
  private matches: Match[];

  constructor() {
    let initialMatch: Match = new Match('Initial', null, null, 5, []);
    initialMatch.id = 34;
    this.matches = [initialMatch];
  }

  getMatches(): Match[] {
    return this.matches;
  }

  getMatch(id: number): Match {
    return this.matches.find((match: Match) => match.id === id);
  }

  save(match: Match) {
    let existingMatch: Match = this.getMatch(match.id);
    if (existingMatch !== undefined && existingMatch !== null) {
      let index: number = this.matches.indexOf(existingMatch);
      this.matches[index] = match;
    } else {
      match.id = Math.random() * 1000 + 1;
      this.matches.push(match);
    }
  }
}
