import { TestBed } from '@angular/core/testing';

import { PyServerStatusService } from './py-server-status.service';

describe('PyServerStatusService', () => {
  let service: PyServerStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PyServerStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
