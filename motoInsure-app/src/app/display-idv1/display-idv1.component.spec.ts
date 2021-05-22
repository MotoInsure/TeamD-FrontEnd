import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayIdv1Component } from './display-idv1.component';

describe('DisplayIdv1Component', () => {
  let component: DisplayIdv1Component;
  let fixture: ComponentFixture<DisplayIdv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayIdv1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayIdv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
