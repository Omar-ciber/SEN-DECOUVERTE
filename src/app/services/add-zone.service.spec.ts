import { TestBed } from '@angular/core/testing';

import { AddZoneService } from './add-zone.service';

describe('AddZoneService', () => {
  let service: AddZoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddZoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
