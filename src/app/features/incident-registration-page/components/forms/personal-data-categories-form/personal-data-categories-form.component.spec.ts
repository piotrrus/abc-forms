import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataCategoriesFormComponent } from './personal-data-categories-form.component';

describe('PersonalDataCategoriesFormComponent', () => {
     let component: PersonalDataCategoriesFormComponent;
     let fixture: ComponentFixture<PersonalDataCategoriesFormComponent>;

     beforeEach(() => {
          TestBed.configureTestingModule({
               declarations: [PersonalDataCategoriesFormComponent],
          });
          fixture = TestBed.createComponent(PersonalDataCategoriesFormComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
});
