import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { sectionDescription, sectionHeader, sectionItem, sectionList } from './printing.util';

export function createSection3(data: DescriptionDTO): Content {
     const content: Content = [];
     content.push(sectionHeader('3. Czas naruszenia'));
     // content.push({ text: '3. Czas naruszenia', style: 'sectionHeader' });

     content.push(sectionItem('3A. Wykrycie naruszenia i powiadomienie nadzorczego'));

     data.dateDiscoveryInfringement ?
          content.push(sectionList(`Data stwierdzenia naruszenia ${data.dateDiscoveryInfringement.toString()}`)) : null;

     content.push(sectionList('Sposób stwierdzenia naruszenia'));
     data.methodDeterminingViolation ?
          content.push(sectionList(data.methodDeterminingViolation.toString())) : null;

     data.dateInformationSubject ?
          content.push(sectionList(`Data powiadomienia przez podmiot przetwarzający ${data.dateInformationSubject.toString()}`)) : null;

     //'uodos.reasonsForDelay'
     content.push(sectionList('Powody opóźnienia powiadomienia organu nadzorczego o naruszeniu'));
     data.reasonsForDelay ?
          content.push(sectionList(data.reasonsForDelay.toString())) : null;

     content.push(sectionItem('3B. Czas naruszenia'));

     // {{ 'uodos.descriptionDateTime' | translate }}
     content.push(sectionDescription('Data i czas zaistnienia/rozpoczęcia naruszenia'));

     data.dateTime3b ?
          content.push(sectionList(data.dateTime3b.toString())) : null;
     //{{ 'uodos.descriptionDateTimeEnd' | translate }}
     content.push(sectionDescription('Data i czas zakończenia naruszenia'));
     data.dateTimeEnd3b ?
          content.push(sectionList(data.dateTimeEnd3b.toString())) : null;
     // content.push(sectionDescription('Jeśli nie znasz dokładnego terminu, podaj czas przybliżony.'));

     // content.push({
     //      text: '3A. Wykrycie naruszenia i powiadomienie nadzorczego',
     //      style: 'sectionItem',
     // });
     // content.push({
     //      text: '3B. Czas naruszenia',
     //      style: 'sectionItem',
     // });
     // content.push({
     //      text: '3C. Działanie złoliwego oprogramowania',
     //      style: 'sectionItem',
     // });
     // data.approximateNumberOfPeopleBreached
     //      ? content.push({
     //             text: `Przybliżona liczba osób, których dotyczy naruszenie ${data.approximateNumberOfPeopleBreached}`,
     //             style: 'list',
     //        })
     //      : null;

     // data.approximateNumberOfPeopleBreachedEntry
     //      ? content.push({
     //             text: `Przybliżona liczba wpisów danych osobowych, których dotyczy naruszenie ${data.approximateNumberOfPeopleBreachedEntry}`,
     //             style: 'list',
     //        })
     //      : null;

     return content;
}
