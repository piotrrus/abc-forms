import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentRegistrationPageComponent } from './incident-registration-page.component';

describe('IncidentRegistrationPageComponent', () => {
  let component: IncidentRegistrationPageComponent;
  let fixture: ComponentFixture<IncidentRegistrationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncidentRegistrationPageComponent]
    });
    fixture = TestBed.createComponent(IncidentRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
