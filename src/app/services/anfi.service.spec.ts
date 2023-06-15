import { TestBed } from '@angular/core/testing';

import { AnfiService } from './anfi.service';

describe('AnfiService', () => {
  let service: AnfiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnfiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
