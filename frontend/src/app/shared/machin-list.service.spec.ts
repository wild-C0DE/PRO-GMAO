import { TestBed } from '@angular/core/testing';

import { MachinListService } from './machin/machin-list.service';

describe('MachinListService', () => {
  let service: MachinListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachinListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
