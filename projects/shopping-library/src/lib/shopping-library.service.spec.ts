import { TestBed } from '@angular/core/testing';

import { ShoppingLibraryService } from './shopping-library.service';

describe('ShoppingLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingLibraryService = TestBed.get(ShoppingLibraryService);
    expect(service).toBeTruthy();
  });
});
