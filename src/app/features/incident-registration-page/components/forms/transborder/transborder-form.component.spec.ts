import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransBorderFormComponent } from './transborder-form.component';

describe('TransBorderFormComponent', () => {
     let component: TransBorderFormComponent;
     let fixture: ComponentFixture<TransBorderFormComponent>;

     beforeEach(() => {
          TestBed.configureTestingModule({
               declarations: [TransBorderFormComponent],
          });
          fixture = TestBed.createComponent(TransBorderFormComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
});
