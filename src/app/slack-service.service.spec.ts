import { TestBed, inject } from '@angular/core/testing';

import { SlackServiceService } from './slack-service.service';

describe('SlackServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlackServiceService]
    });
  });

  it('should be created', inject([SlackServiceService], (service: SlackServiceService) => {
    expect(service).toBeTruthy();
  }));
});
