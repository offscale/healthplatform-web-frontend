import { TestBed } from '@angular/core/testing';

import { PyStatsService } from './py-stats.service';

describe('StatsService', () => {
  let service: PyStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PyStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
