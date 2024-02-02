import { TestBed } from '@angular/core/testing';

import { AddGuideService } from './add-guide.service';

describe('AddGuideService', () => {
  let service: AddGuideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddGuideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
