import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { createContentTable, createTable, sectionHeader, sectionItem, sectionList } from './printing.util';
import * as dayjs from 'dayjs';
import { DATE_TIME_FORMAT } from '../enums/date-time.formats.enum';

export function createSection3(data: DescriptionDTO): Content {
     const content: Content = [];
     content.push(sectionHeader('3. Czas naruszenia'));

     content.push(sectionItem('3A. Wykrycie naruszenia i powiadomienie nadzorczego'));

     content.push({
          layout: 'noBorders',
          table: {
               headerRows: 0,
               widths: ['*', '*'],
               body: [
                    [
                         { text: 'Data stwierdzenia naruszenia', style: 'list' },
                         { text: data.dateDiscoveryInfringement?.toString(), style: 'list' },
                    ],
                    [
                         {
                              text: 'Sposób stwierdzenia naruszenia',
                              style: 'list',
                         },
                         { text: data.methodDeterminingViolation, style: 'list' },
                    ],
                    [
                         {
                              text: 'Data powiadomienia przez podmiot przetwarzający',
                              style: 'list',
                         },
                         { text: data.dateInformationSubject?.toString(), style: 'list' },
                    ],
               ],
          },
     });

     //'uodos.reasonsForDelay'
     content.push(sectionList('Powody opóźnienia powiadomienia organu nadzorczego o naruszeniu'));
     data.reasonsForDelay ? content.push(sectionList(data.reasonsForDelay.toString())) : null;

     content.push(sectionItem('3B. Czas naruszenia'));

     // {{ 'uodos.descriptionDateTime' | translate }}

     const startEnd = dayjs(data.dateTime3b).format(DATE_TIME_FORMAT);
     const dateEnd = dayjs(data.dateTimeEnd3b).format(DATE_TIME_FORMAT);

     content.push({
          layout: 'noBorders',
          table: {
               headerRows: 0,
               widths: ['*', '*'],
               body: [
                    [
                         { text: 'Data i czas zaistnienia/rozpoczęcia naruszenia', style: 'list' },
                         { text: startEnd, style: 'list' },
                    ],
                    [
                         {
                              text: 'Data i czas zakończenia naruszenia',
                              style: 'list',
                         },
                         { text: dateEnd, style: 'list' },
                    ],
               ],
          },
     });

     return content;
}
