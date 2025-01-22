import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfPersonsComponent } from './number-of-persons.component';

describe('NumberOfPersonsComponent', () => {
  let component: NumberOfPersonsComponent;
  let fixture: ComponentFixture<NumberOfPersonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberOfPersonsComponent]
    });
    fixture = TestBed.createComponent(NumberOfPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
