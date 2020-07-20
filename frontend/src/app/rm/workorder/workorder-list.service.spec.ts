import { TestBed } from '@angular/core/testing';

import { WorkorderListService } from './workorder-list.service';

describe('WorkorderListService', () => {
  let service: WorkorderListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkorderListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
