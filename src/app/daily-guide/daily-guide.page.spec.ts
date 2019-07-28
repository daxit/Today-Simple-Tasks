import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyGuidePage } from './daily-guide.page';

describe('DailyGuidePage', () => {
  let component: DailyGuidePage;
  let fixture: ComponentFixture<DailyGuidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyGuidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
