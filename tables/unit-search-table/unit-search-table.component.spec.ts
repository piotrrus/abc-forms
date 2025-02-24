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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchTableModule } from '@shared/modules/search-table/search-table.module';
import { UnitSearchTableComponent } from './unit-search-table.component';

describe('UnitSearchTableComponent', () => {
     let component: UnitSearchTableComponent;
     let fixture: ComponentFixture<UnitSearchTableComponent>;

     beforeEach(() => {
          TestBed.configureTestingModule({
               declarations: [UnitSearchTableComponent],
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
                    MatCheckboxModule,
                    MatIconModule,
                    MatAutocompleteModule,
                    MultiselectTypeaheadModule,
                    SearchTableModule,
               ],
               schemas: [CUSTOM_ELEMENTS_SCHEMA],
          });
          fixture = TestBed.createComponent(UnitSearchTableComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
});
