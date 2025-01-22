import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentImpactComponent } from './incident-impact.component';

describe('IncidentImpactComponent', () => {
  let component: IncidentImpactComponent;
  let fixture: ComponentFixture<IncidentImpactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncidentImpactComponent]
    });
    fixture = TestBed.createComponent(IncidentImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
