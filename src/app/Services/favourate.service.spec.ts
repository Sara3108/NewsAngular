import { TestBed } from '@angular/core/testing';

import { FavourateService } from './favourate.service';

describe('FavourateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavourateService = TestBed.get(FavourateService);
    expect(service).toBeTruthy();
  });
});
