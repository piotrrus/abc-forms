import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDataFormComponent } from './admin-data-form.component';

describe('AdminDataFormComponent', () => {
  let component: AdminDataFormComponent;
  let fixture: ComponentFixture<AdminDataFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDataFormComponent]
    });
    fixture = TestBed.createComponent(AdminDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
