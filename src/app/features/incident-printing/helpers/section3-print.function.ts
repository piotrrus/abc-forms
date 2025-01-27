import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';

export function createSection3(data: DescriptionDTO): Content {
     const content: Content = [];

     content.push({ text: '3. Czas naruszenia', style: 'sectionHeader' });

     content.push({
          text: '3A. Wykrycie naruszenia i powiadomienie nadzorczego',
          style: 'sectionItem',
     });
     content.push({
          text: '3B. Czas naruszenia',
          style: 'sectionItem',
     });
     content.push({
          text: '3C. Działanie złoliwego oprogramowania',
          style: 'sectionItem',
     });
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
