import { Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';
import dayjs from 'dayjs';
import { DATE_FORMAT, DAY_FORMAT, FULL_DATE, MONTH_YEAR, MONTH_YEAR_SHORT } from './date-time.formats.enum';

export const DATE_FORMATS = {
     parse: {
          dateInput: ['YYYY-MM-DD'],
     },
     display: {
          dateInput: DATE_FORMAT,
          monthYearLabel: MONTH_YEAR_SHORT,
          dateA11yLabel: DAY_FORMAT,
          monthYearA11yLabel: MONTH_YEAR,
     },
};

@Injectable()
export class PickDateAdapter extends NativeDateAdapter {
     public override format(date: Date, displayFormat: NonNullable<unknown>): string {
          if (displayFormat === 'input') {
               return dayjs().format(FULL_DATE);
          } else {
               return dayjs(date).format(DATE_FORMAT);
          }
     }
}
