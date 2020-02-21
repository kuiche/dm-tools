import { TestBed } from '@angular/core/testing';

import { DmPointbuyService } from './dm-pointbuy.service';

describe('DmPointbuyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DmPointbuyService = TestBed.get(DmPointbuyService);
    expect(service).toBeTruthy();
  });
});
