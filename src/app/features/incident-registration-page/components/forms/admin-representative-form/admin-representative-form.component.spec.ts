import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminRepresentativeFormComponent } from './admin-representative-form.component';

describe('AdminRepresentativeFormComponent', () => {
     let component: AdminRepresentativeFormComponent;
     let fixture: ComponentFixture<AdminRepresentativeFormComponent>;

     beforeEach(() => {
          TestBed.configureTestingModule({
               declarations: [AdminRepresentativeFormComponent],
          });
          fixture = TestBed.createComponent(AdminRepresentativeFormComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
});
