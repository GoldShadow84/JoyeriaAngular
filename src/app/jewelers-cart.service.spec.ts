import { TestBed } from '@angular/core/testing';

import { JewelersCartService } from './jewelers-cart.service';

describe('JewelersCartService', () => {
  let service: JewelersCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JewelersCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
