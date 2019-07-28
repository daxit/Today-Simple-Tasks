import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomedayPage } from './someday.page';

describe('SomedayPage', () => {
  let component: SomedayPage;
  let fixture: ComponentFixture<SomedayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomedayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomedayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
