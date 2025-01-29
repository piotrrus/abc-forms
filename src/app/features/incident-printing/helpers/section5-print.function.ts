import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { BLOCK_STYLES } from '../enums/block-styles.enum';

export function createSection5(data: DescriptionDTO): Content {
     const content: Content = [];

     content.push({ text: '5. Liczba osób i wpisów', style: 'sectionHeader' });

     // uodos.approximateNumberOfPeopleBreached | translate
     // uodos.approximateNumberOfPeopleBreachedEntry | translate

     // data.approximateNumberOfPeopleBreached
     //      ? content.push({
     //             text: `Przybliżona liczba osób, których dotyczy naruszenie ${data.approximateNumberOfPeopleBreached}`,
     //             style: BLOCK_STYLES.LIST,
     //        })
     //      : null;
     //
     // data.approximateNumberOfPeopleBreachedEntry
     //      ? content.push({
     //             text: `Przybliżona liczba wpisów danych osobowych, których dotyczy naruszenie ${data.approximateNumberOfPeopleBreachedEntry}`,
     //             style: BLOCK_STYLES.LIST,
     //        })
     //      : null;

     content.push({
          layout: 'noBorders',
          table: {
               headerRows: 0,
               widths: ['*', '*'],
               body: [
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
               ],
          },
     });
     return content;
}
