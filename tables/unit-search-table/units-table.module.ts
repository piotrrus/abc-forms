import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/modules/shared.module';
import { SearchTableModule } from '@shared/modules/search-table/search-table.module';
import { UnitSearchTableComponent } from './unit-search-table.component';

@NgModule({
     declarations: [UnitSearchTableComponent],
     exports: [UnitSearchTableComponent],
     imports: [CommonModule, SharedModule, SearchTableModule],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UnitsTableModule {}
