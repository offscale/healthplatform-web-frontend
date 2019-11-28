import { TestBed } from '@angular/core/testing';

import { CategoriseService } from './categorise.service';

describe('CategoriseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriseService = TestBed.get(CategoriseService);
    expect(service).toBeTruthy();
  });
});
