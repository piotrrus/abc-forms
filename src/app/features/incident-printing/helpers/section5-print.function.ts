import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { BLOCK_STYLES } from '../enums/block-styles.enum';

export function createSection5(data: DescriptionDTO): Content {
     const content: Content = [];

     content.push({ text: '5. Liczba osób i wpisów', style: 'sectionHeader' });

     // uodos.approximateNumberOfPeopleBreached | translate
     data.approximateNumberOfPeopleBreached
          ? content.push({
               text: `Przybliżona liczba osób, których dotyczy naruszenie ${data.approximateNumberOfPeopleBreached}`,
               style: BLOCK_STYLES.LIST,
          })
          : null;
     // uodos.approximateNumberOfPeopleBreachedEntry | translate
     data.approximateNumberOfPeopleBreachedEntry
          ? content.push({
               text: `Przybliżona liczba wpisów danych osobowych, których dotyczy naruszenie ${data.approximateNumberOfPeopleBreachedEntry}`,
               style: BLOCK_STYLES.LIST,
          })
          : null;
     // 'uodos.descapproximateNumberOfPeopleBreachedEntry' | translate
     data.approximateNumberOfPeopleBreachedEntry
          ? content.push({ text: 'Nie dotyczy to liczby osób. Jednej osobie można przypisać kilka wpisów (np. jednej osobie można przypisać kilka wykonanych transakcji)', style: 'description' })
          : null;

     return content;
}
