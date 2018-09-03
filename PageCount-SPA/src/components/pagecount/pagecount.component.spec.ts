/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagecountComponent } from './pagecount.component';

describe('PagecountComponent', () => {
  let component: PagecountComponent;
  let fixture: ComponentFixture<PagecountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagecountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagecountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
