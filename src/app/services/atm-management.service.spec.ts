import { TestBed } from '@angular/core/testing';

import { AtmManagementService } from './atm-management.service';

describe('AtmManagementService', () => {
  let service: AtmManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtmManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
