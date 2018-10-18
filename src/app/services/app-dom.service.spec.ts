import { inject, TestBed } from '@angular/core/testing';

import { AppDomService } from './app-dom.service';

describe('AppDomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppDomService]
    });
  });

  it('should be created', inject([AppDomService], (service : AppDomService) => {
    expect(service).toBeTruthy();
  }));
});
