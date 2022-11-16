import { TestBed } from '@angular/core/testing';

import { JewelersDataService } from './jewelers-data.service';

describe('JewelersDataService', () => {
  let service: JewelersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JewelersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
