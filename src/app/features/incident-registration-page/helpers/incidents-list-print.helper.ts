import { Injectable } from '@angular/core';
import { Content } from 'pdfmake/interfaces';
import { BasePrintHelper } from '../../../shared/modules/pdf-export/helpers/base-print.helper';
import { DescriptionDTO } from 'src/description-dto';
import { createListHeaderSection } from '../../../shared/modules/pdf-export/helpers/pdf-headers.function';

import { horizontalLinePdf } from '../../../shared/modules/pdf-export/models/pdf-export-models';
import { createTableWithHeaders } from '../../../shared/modules/pdf-export/printing.util';
import { incidentsTableColumns } from '../models/incidents-list-columns';

@Injectable()
export class IncidentsListPrintHelper extends BasePrintHelper {
     constructor() {
          super();
     }
     //data: DescriptionDTO[]
     public generateListPdf(): void {
          const content: Content = [];
          const pdfFileName = 'incidenta-list';

          //  const columns = incidentsTableColumns;
          // = [
          //      'Id',
          //      'Tytuł',
          //      'Administrator danych',
          //      'REGON',
          //      'Typ zgłoszenia',
          //      'Czas od stwierdzeania do zgłoszenia',
          //      'Data zgłoszenia',
          //      'Data stwierdzenia',
          //      'Kategorie danych osobowych',
          //      'Szczególne kategorie danych RODO 9',
          //      'Dane dotyczące wyroków skazujących',
          //      'Wysokie ryzyko',
          //      'Czy zawiadomiono podmioty?',
          //      'Naruszenie transgraniczne',
          // ];
          const columns = incidentsTableColumns.map((column) => ({ text: column, style: 'tableRow' }));
          console.log(columns);
          content.push(createListHeaderSection());
          content.push(horizontalLinePdf);

          content.push({
               layout: 'lightHorizontalLines',
               table: {
                    headerRows: 1,
                    widths: columns.map(() => '*'),
                    body: [
                         columns,
                         [
                              { text: 'Id', style: 'tableRow' },
                              { text: '', style: 'tableRow' },
                              { text: 'Roman Jabłoński', style: 'tableRow' },
                              { text: '121523112', style: 'tableRow' },
                              { text: 'Zgłoszenie wstępne', style: 'tableRow' },
                              { text: 'Id', style: 'tableRow' },
                              { text: '2025-01-13', style: 'tableRow' },
                              { text: '2025-01-13', style: 'tableRow' },
                              {
                                   text: 'Nazwiska i imiona, Seria i numer dowodu osobistego, Wizerunek',
                                   style: 'tableRow',
                              },
                              { text: 'Inne', style: 'tableRow' },
                              { text: 'nie', style: 'tableRow' },
                              { text: 'tak', style: 'tableRow' },
                              { text: 'tak', style: 'tableRow' },
                              { text: 'tak', style: 'tableRow' },
                         ],
                         [
                              { text: 'Id', style: 'tableRow' },
                              { text: '', style: 'tableRow' },
                              { text: 'Jan Kowalski', style: 'tableRow' },
                              { text: '651523456', style: 'tableRow' },
                              { text: 'Zgłoszenie wstępne', style: 'tableRow' },
                              { text: 'Id', style: 'tableRow' },
                              { text: '2025-01-13', style: 'tableRow' },
                              { text: '2025-01-13', style: 'tableRow' },
                              { text: 'Nazwiska i imiona, Wizerunek', style: 'tableRow' },
                              { text: 'Dane o pochodzeniu rasowym lub etnicznym', style: 'tableRow' },
                              { text: 'nie', style: 'tableRow' },
                              { text: 'nie', style: 'tableRow' },
                              { text: 'nie', style: 'tableRow' },
                              { text: 'nie', style: 'tableRow' },
                         ],
                    ],
               },
          });
          console.log(content);
          //     content.push(createTableWithHeaders(body));
          // content.push(createSection1(data));
          this.createPdf(content, pdfFileName);
     }
}
