import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { sectionDescription, sectionHeader, sectionItem, sectionList } from './printing.util';
import * as dayjs from 'dayjs';
import { DATE_FORMAT } from '../enums/date-time.formats.enum';

export function createSection3(data: DescriptionDTO): Content {
     const content: Content = [];
     content.push(sectionHeader('3. Czas naruszenia'));
     // content.push({ text: '3. Czas naruszenia', style: 'sectionHeader' });

     content.push(sectionItem('3A. Wykrycie naruszenia i powiadomienie nadzorczego'));

     data.dateDiscoveryInfringement
          ? content.push(
                 sectionList(`Data stwierdzenia naruszenia ${data.dateDiscoveryInfringement.toString()}`)
            )
          : null;

     content.push(sectionList('Sposób stwierdzenia naruszenia'));
     data.methodDeterminingViolation
          ? content.push(sectionList(data.methodDeterminingViolation.toString()))
          : null;

     data.dateInformationSubject
          ? content.push(
                 sectionList(
                      `Data powiadomienia przez podmiot przetwarzający ${data.dateInformationSubject.toString()}`
                 )
            )
          : null;

     //'uodos.reasonsForDelay'
     content.push(sectionList('Powody opóźnienia powiadomienia organu nadzorczego o naruszeniu'));
     data.reasonsForDelay ? content.push(sectionList(data.reasonsForDelay.toString())) : null;

     content.push(sectionItem('3B. Czas naruszenia'));

     // {{ 'uodos.descriptionDateTime' | translate }}
     content.push(sectionList('Data i czas zaistnienia/rozpoczęcia naruszenia'));

     const startEnd = dayjs(data.dateTime3b).format(DATE_FORMAT);
     const dateEnd = dayjs(data.dateTimeEnd3b).format(DATE_FORMAT);

     data.dateTime3b ? content.push(sectionList(startEnd)) : null;
     //{{ 'uodos.descriptionDateTimeEnd' | translate }}
     content.push(sectionList('Data i czas zakończenia naruszenia'));
     data.dateTimeEnd3b ? content.push(sectionList(dateEnd)) : null;
     // content.push(sectionDescription('Jeśli nie znasz dokładnego terminu, podaj czas przybliżony.'));

     return content;
}
