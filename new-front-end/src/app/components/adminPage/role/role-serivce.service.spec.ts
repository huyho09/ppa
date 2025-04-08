import { TestBed } from '@angular/core/testing';

import { RoleSerivceService } from './role-serivce.service';

describe('RoleSerivceService', () => {
  let service: RoleSerivceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleSerivceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
