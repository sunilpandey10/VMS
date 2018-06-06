import { TestBed, inject } from '@angular/core/testing';

import { ClientdataService } from './clientdata.service';

describe('ClientdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientdataService]
    });
  });

  it('should be created', inject([ClientdataService], (service: ClientdataService) => {
    expect(service).toBeTruthy();
  }));
});
