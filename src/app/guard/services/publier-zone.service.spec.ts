import { TestBed } from '@angular/core/testing';

import { PublierZoneService } from './publier-zone.service';

describe('PublierZoneService', () => {
  let service: PublierZoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublierZoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
