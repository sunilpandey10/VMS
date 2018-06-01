import { TestBed, inject } from '@angular/core/testing';

import { AdmindashboardService } from './admindashboard.service';

describe('AdmindashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmindashboardService]
    });
  });

  it('should be created', inject([AdmindashboardService], (service: AdmindashboardService) => {
    expect(service).toBeTruthy();
  }));
});
