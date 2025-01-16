import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddressFormComponent } from './admin-address-form.component';

describe('AdminAddressFormComponent', () => {
     let component: AdminAddressFormComponent;
     let fixture: ComponentFixture<AdminAddressFormComponent>;

     beforeEach(() => {
          TestBed.configureTestingModule({
               declarations: [AdminAddressFormComponent],
          });
          fixture = TestBed.createComponent(AdminAddressFormComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
});
