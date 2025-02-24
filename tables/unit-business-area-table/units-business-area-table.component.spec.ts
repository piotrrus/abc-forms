import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { MatChipsModule } from '@angular/material/chips';
import { MultiselectTypeaheadModule } from '@shared/modules/multiselect-typeahead/multiselect-typeahead.module';
import { UnitsBusinessAreaTableComponent } from './units-business-area-table.component';

describe('BusinessAreaTableComponent', () => {
     let component: UnitsBusinessAreaTableComponent;
     let fixture: ComponentFixture<UnitsBusinessAreaTableComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               imports: [
                    HttpClientTestingModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    NoopAnimationsModule,
                    TranslateModule.forRoot(),
                    MatChipsModule,
                    MultiselectTypeaheadModule,
               ],
               declarations: [UnitsBusinessAreaTableComponent],
          }).compileComponents();
     });

     beforeEach(() => {
          fixture = TestBed.createComponent(UnitsBusinessAreaTableComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
});
