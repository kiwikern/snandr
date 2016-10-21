/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MatchListComponent } from './match-list.component';
import { MatchService } from '../match.service';

describe('Component: MatchList', () => {
  it('should create an instance', () => {
    let service = new MatchService;
    let component = new MatchListComponent(service);
    expect(component).toBeTruthy();
  });
});
