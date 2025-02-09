import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredIncidentsPageComponent } from './registered-incidents-page.component';

describe('RegisteredIncidentsPageComponent', () => {
  let component: RegisteredIncidentsPageComponent;
  let fixture: ComponentFixture<RegisteredIncidentsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisteredIncidentsPageComponent]
    });
    fixture = TestBed.createComponent(RegisteredIncidentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
