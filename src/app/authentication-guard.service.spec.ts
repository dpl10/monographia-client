import { TestBed } from '@angular/core/testing';

import { AuthenticationGuardService } from '@monographia/authentication-guard.service';

describe('AuthenticationGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationGuardService = TestBed.inject(AuthenticationGuardService);
    expect(service).toBeTruthy();
  });
});
