import { TestBed } from '@angular/core/testing';

import { AddworkService } from './addwork.service';

describe('AddworkService', () => {
  let service: AddworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
