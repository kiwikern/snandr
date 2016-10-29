/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FriendlistComponent } from './friendlist.component';

describe('FriendlistComponent', () => {
  let component: FriendlistComponent;
  let fixture: ComponentFixture<FriendlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
