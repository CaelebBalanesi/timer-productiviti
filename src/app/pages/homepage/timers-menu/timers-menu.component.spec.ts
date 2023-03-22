import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimersMenuComponent } from './timers-menu.component';

describe('TimersMenuComponent', () => {
  let component: TimersMenuComponent;
  let fixture: ComponentFixture<TimersMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimersMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimersMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
