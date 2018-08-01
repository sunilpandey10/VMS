import { TestBed, inject } from '@angular/core/testing';

import { CalenderServiceService } from './user.calender-service.service';

describe('User.CalenderServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalenderServiceService]
    });
  });

  it('should be created', inject([CalenderServiceService], (service: CalenderServiceService) => {
    expect(service).toBeTruthy();
  }));
});
