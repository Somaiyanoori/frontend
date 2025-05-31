import { TestBed } from '@angular/core/testing';

import { ProverbsService } from './services/proverbs.service';

describe('ProverbsService', () => {
  let service: ProverbsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProverbsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
