import { TestBed } from '@angular/core/testing';

import { AuthguradServicedService } from './authgurad-serviced.service';

describe('AuthguradServicedService', () => {
  let service: AuthguradServicedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthguradServicedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
