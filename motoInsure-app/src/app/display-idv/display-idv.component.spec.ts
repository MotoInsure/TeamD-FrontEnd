import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayIdvComponent } from './display-idv.component';

describe('DisplayIdvComponent', () => {
  let component: DisplayIdvComponent;
  let fixture: ComponentFixture<DisplayIdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayIdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayIdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
