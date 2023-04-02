import { TestBed } from '@angular/core/testing';

import { TimerDataServiceService } from './timer-data-service.service';

describe('TimerDataServiceService', () => {
  let service: TimerDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
