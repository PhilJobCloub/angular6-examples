import { inject, TestBed } from '@angular/core/testing';

import { UsersService } from '@app/features/users/services/users.service';

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService]
    });
  });

  it('should be created', inject([UsersService], (service : UsersService) => {
    expect(service).toBeTruthy();
  }));
});
