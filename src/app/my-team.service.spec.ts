import { TestBed, inject } from '@angular/core/testing';

import { MyTeamService } from './my-team.service';

describe('MyTeamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyTeamService]
    });
  });

  it('should be created', inject([MyTeamService], (service: MyTeamService) => {
    expect(service).toBeTruthy();
  }));
});
