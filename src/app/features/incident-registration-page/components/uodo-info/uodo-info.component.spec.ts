import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UodoInfoComponent } from './uodo-info.component';

describe('UodoInfoComponent', () => {
  let component: UodoInfoComponent;
  let fixture: ComponentFixture<UodoInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UodoInfoComponent]
    });
    fixture = TestBed.createComponent(UodoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
