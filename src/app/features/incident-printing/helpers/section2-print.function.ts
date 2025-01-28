import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { sectionHeader, sectionItem, sectionList } from './printing.util';

export function createSection2(data: DescriptionDTO): Content {
     const content: Content = [];
     content.push(sectionHeader('2. Podmiot zglaszający'));

     content.push(sectionItem('2A. Dane administratora danych'));

     content.push(sectionItem('2B. Adres siedziby administratora danych'));

     // 'uodos.street'| translate
     data.street
          ? content.push(sectionList(`Ulica ${data.street} ${data.numberHouse} ${data.numberflat}`))
          : null;
     data.city ? content.push(sectionList(`Miasto i kod pocztowy ${data.city} ${data.postCode}`)) : null;
     data.countyAdministrativeArea
          ? content.push(sectionList(`Województwo ${data.countyAdministrativeArea}`))
          : null;
     data.provinceAdministrativeArea
          ? content.push(sectionList(`Powiat ${data.provinceAdministrativeArea}`))
          : null;
     data.communeAdministrativeArea
          ? content.push(sectionList(`Gmina ${data.communeAdministrativeArea}`))
          : null;
     // 'uodos.country'| translate
     data.country ? content.push(sectionList(`Państwo ${data.country}`)) : null;

     content.push(sectionItem('2C. Osoby uprawnione do reprezentowania administratora'));

     content.push(sectionItem('2D. Pełnomocnik'));

     data.applicationCompletedTheRepresentative
          ? content.push(sectionList('Wniosek wypełniany przez pełnomocnika'))
          : null;

     content.push(sectionItem('2E. Inspektor ochrony danych'));

     data.nameDateContact ? content.push(sectionList(`Imię i nazwisko ${data.nameDateContact}`)) : null;

     data.phoneNumber ? content.push(sectionList(`Numer telefonu ${data.phoneNumber}`)) : null;

     data.mail ? content.push(sectionList(`Email ${data.mail}`)) : null;

     //'uodos.anInspectorHasNotBeenAppointed' | translate
     data.anInspectorHasNotBeenAppointed
          ? content.push(sectionList('Inspektor nie został wyznaczony'))
          : null;

     // 'uodos.descriptionSection2f' | translate
     content.push(sectionItem('2F. Inne podmioty uczestniczące'));

     return content;
}
