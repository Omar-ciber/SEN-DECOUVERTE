import { TestBed } from '@angular/core/testing';

import { EffectuerReservationService } from './effectuer-reservation.service';

describe('EffectuerReservationService', () => {
  let service: EffectuerReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EffectuerReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
