import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSecurityInspectorFormComponent } from './data-security-inspector-form.component';

describe('DataSecurityInspectorFormComponent', () => {
  let component: DataSecurityInspectorFormComponent;
  let fixture: ComponentFixture<DataSecurityInspectorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSecurityInspectorFormComponent]
    });
    fixture = TestBed.createComponent(DataSecurityInspectorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
