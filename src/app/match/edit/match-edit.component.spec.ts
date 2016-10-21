/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatchEditComponent } from './match-edit.component';
import { MatchService } from '../match.service';
import { Match } from '../match';

class MockMatchService {
  save(match: Match) {

  }
}

describe('Component: MatchEdit', () => {
  let fixture;
  let component;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        MatchEditComponent
      ],
      providers: [
        { provide: MatchService, useClass: MockMatchService }
      ]
    });
    fixture = TestBed.createComponent(MatchEditComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should save when save button is clicked', () => {
    fixture.detectChanges();
    let saveButton = fixture.debugElement.query(By.css('button'));
    let startDate = fixture.debugElement.query(By.css('input')).nativeElement;
    startDate.value = null;
    saveButton.triggerEventHandler('click', null);
    expect(startDate.textContent).toBe('');
  });
});
