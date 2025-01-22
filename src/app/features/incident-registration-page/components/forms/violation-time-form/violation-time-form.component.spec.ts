import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationTimeFormComponent } from './violation-time-form.component';

describe('ViolationTimeFormComponent', () => {
  let component: ViolationTimeFormComponent;
  let fixture: ComponentFixture<ViolationTimeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViolationTimeFormComponent]
    });
    fixture = TestBed.createComponent(ViolationTimeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
