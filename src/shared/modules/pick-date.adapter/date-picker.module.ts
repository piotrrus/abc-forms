import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { DATE_FORMATS, PickDateAdapter } from './pick-date-adapter';

@NgModule({
     imports: [CommonModule],
     providers: [
          { provide: DateAdapter, useClass: PickDateAdapter },
          { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
     ],
})
export class DatePickerModule {}
