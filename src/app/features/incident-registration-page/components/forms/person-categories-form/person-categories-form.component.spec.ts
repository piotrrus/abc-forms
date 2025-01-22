import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCategoriesFormComponent } from './person-categories-form.component';

describe('PersonCategoriesFormComponent', () => {
     let component: PersonCategoriesFormComponent;
     let fixture: ComponentFixture<PersonCategoriesFormComponent>;

     beforeEach(() => {
          TestBed.configureTestingModule({
               declarations: [PersonCategoriesFormComponent],
          });
          fixture = TestBed.createComponent(PersonCategoriesFormComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
});
