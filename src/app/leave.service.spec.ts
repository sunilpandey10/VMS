import { TestBed, inject } from '@angular/core/testing';

import { LeaveService } from './leave.service';

describe('LeaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaveService]
    });
  });

  it('should be created', inject([LeaveService], (service: LeaveService) => {
    expect(service).toBeTruthy();
  }));
});
