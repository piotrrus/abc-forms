import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibleConsequencesFormComponent } from './possible-consequences-form.component';

describe('PossibleConsequencesFormComponent', () => {
  let component: PossibleConsequencesFormComponent;
  let fixture: ComponentFixture<PossibleConsequencesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PossibleConsequencesFormComponent]
    });
    fixture = TestBed.createComponent(PossibleConsequencesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
