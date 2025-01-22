import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityMeasuresFormComponent } from './security-measures-form.component';

describe('SecurityMeasuresFormComponent', () => {
  let component: SecurityMeasuresFormComponent;
  let fixture: ComponentFixture<SecurityMeasuresFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityMeasuresFormComponent]
    });
    fixture = TestBed.createComponent(SecurityMeasuresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
