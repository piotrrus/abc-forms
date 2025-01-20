import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentKindsFormComponent } from './incident-kinds-form.component';

describe('IncidentKindsFormComponent', () => {
  let component: IncidentKindsFormComponent;
  let fixture: ComponentFixture<IncidentKindsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncidentKindsFormComponent]
    });
    fixture = TestBed.createComponent(IncidentKindsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
