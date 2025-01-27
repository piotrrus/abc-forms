import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';

export function createSection2(data: DescriptionDTO): Content {
     const content: Content = [];

     content.push({ text: '2. Podmiot zglaszający', style: 'sectionHeader' });

     content.push({
          text: '2A. Dane administratora danych',
          style: 'sectionItem',
     });
     content.push({
          text: '2B. Adres siedziby administratora danych',
          style: 'sectionItem',
     });
     content.push({
          text: '2C. Osoby uprawnione do reprezentowania administratora',
          style: 'sectionItem',
     });
     content.push({
          text: '2D. Pełnomocik',
          style: 'sectionItem',
     });
     content.push({
          text: '2E. Inspektor ochrony danych',
          style: 'sectionItem',
     });
     content.push({
          text: '2F. Inne podmioty uczestniczące',
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
