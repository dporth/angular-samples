import { TestBed } from '@angular/core/testing';

import { LoginSignupAuthGuardService } from './login-signup-auth-guard.service';

describe('LoginSignupAuthGuardService', () => {
  let service: LoginSignupAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginSignupAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
