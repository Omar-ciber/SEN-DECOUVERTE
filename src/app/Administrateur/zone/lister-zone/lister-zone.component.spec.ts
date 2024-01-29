import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerZoneComponent } from './lister-zone.component';

describe('ListerZoneComponent', () => {
  let component: ListerZoneComponent;
  let fixture: ComponentFixture<ListerZoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListerZoneComponent]
    });
    fixture = TestBed.createComponent(ListerZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
