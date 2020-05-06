import { TestBed } from '@angular/core/testing';

import { TriageNextService } from './triage-next.service';

describe('TriageNextService', () => {
  let service: TriageNextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriageNextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
