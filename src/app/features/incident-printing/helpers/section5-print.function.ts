import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { BLOCK_STYLES } from '../enums/block-styles.enum';
import { createTable } from './printing.util';

export function createSection5(data: DescriptionDTO): Content {
     const content: Content = [];

     content.push({ text: '5. Liczba osób i wpisów', style: 'sectionHeader' });

     // uodos.approximateNumberOfPeopleBreached | translate
     // uodos.approximateNumberOfPeopleBreachedEntry | translate
     const body = [
          [
               { text: 'Przybliżona liczba osób, których dotyczy naruszenie', style: 'list' },
               { text: data.approximateNumberOfPeopleBreached, style: 'list' },
          ],
          [
               {
                    text: 'Przybliżona liczba wpisów danych osobowych, których dotyczy naruszenie',
                    style: 'list',
               },
               { text: data.approximateNumberOfPeopleBreachedEntry, style: 'list' },
          ],
     ];

     content.push(createTable(body));

     // content.push({
     //      layout: 'noBorders',
     //      table: {
     //           headerRows: 0,
     //           widths: ['*', '*'],
     //           body: [
     //                [
     //                     { text: 'Przybliżona liczba osób, których dotyczy naruszenie', style: 'list' },
     //                     { text: data.approximateNumberOfPeopleBreached, style: 'list' },
     //                ],
     //                [
     //                     {
     //                          text: 'Przybliżona liczba wpisów danych osobowych, których dotyczy naruszenie',
     //                          style: 'list',
     //                     },
     //                     { text: data.approximateNumberOfPeopleBreachedEntry, style: 'list' },
     //                ],
     //           ],
     //      },
     // });
     return content;
}
