import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeGuideComponent } from './liste-guide.component';

describe('ListeGuideComponent', () => {
  let component: ListeGuideComponent;
  let fixture: ComponentFixture<ListeGuideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeGuideComponent]
    });
    fixture = TestBed.createComponent(ListeGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
