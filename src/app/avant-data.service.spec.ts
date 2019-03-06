import { TestBed } from '@angular/core/testing';

import { AvantDataService } from './avant-data.service';

describe('AvantDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvantDataService = TestBed.get(AvantDataService);
    expect(service).toBeTruthy();
  });
});
