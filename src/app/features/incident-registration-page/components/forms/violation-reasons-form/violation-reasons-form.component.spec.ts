import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationReasonsFormComponent } from './violation-reasons-form.component';

describe('ViolationReasonsFormComponent', () => {
  let component: ViolationReasonsFormComponent;
  let fixture: ComponentFixture<ViolationReasonsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViolationReasonsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViolationReasonsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
