import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTimerMenuComponent } from './new-timer-menu.component';

describe('NewTimerMenuComponent', () => {
  let component: NewTimerMenuComponent;
  let fixture: ComponentFixture<NewTimerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTimerMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTimerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
