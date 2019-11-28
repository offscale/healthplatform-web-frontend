import { TestBed } from '@angular/core/testing';

import { CategoryEnumService } from './category-enum.service';

describe('CategoryEnumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryEnumService = TestBed.get(CategoryEnumService);
    expect(service).toBeTruthy();
  });
});
