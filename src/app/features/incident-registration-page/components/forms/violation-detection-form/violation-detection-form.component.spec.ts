import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationDetectionFormComponent } from './violation-detection-form.component';

describe('ViolationDetectionFormComponent', () => {
  let component: ViolationDetectionFormComponent;
  let fixture: ComponentFixture<ViolationDetectionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViolationDetectionFormComponent]
    });
    fixture = TestBed.createComponent(ViolationDetectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
