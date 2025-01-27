import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';

export function createSection5(data: DescriptionDTO): Content {
     const content: Content = [];

     content.push({ text: '5. Liczba osób i wpisów', style: 'sectionHeader' });

     data.approximateNumberOfPeopleBreached
          ? content.push({
                 text: `Przybliżona liczba osób, których dotyczy naruszenie ${data.approximateNumberOfPeopleBreached}`,
                 style: 'list',
            })
          : null;

     // data.approximateNumberOfPeopleBreached
     //      ? content.push({ text: data.approximateNumberOfPeopleBreached, style: 'list' })
     //      : null;

     data.approximateNumberOfPeopleBreachedEntry
          ? content.push({
                 text: `Przybliżona liczba wpisów danych osobowych, których dotyczy naruszenie ${data.approximateNumberOfPeopleBreachedEntry}`,
                 style: 'list',
            })
          : null;
     // data.approximateNumberOfPeopleBreachedEntry
     //      ? content.push({ text: data.approximateNumberOfPeopleBreachedEntry, style: 'list' })
     //      : null;

     return content;
}
