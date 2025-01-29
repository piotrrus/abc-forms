import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { sectionHeader, sectionItem, sectionList } from './printing.util';

export function createSection2(data: DescriptionDTO): Content {
     const content: Content = [];
     content.push(sectionHeader('2. Podmiot zglaszający'));

     content.push(sectionItem('2A. Dane administratora danych'));
     // 'uodos.fullNameAdmin'| translate
     content.push({
          layout: 'noBorders',
          table: {
               headerRows: 0,
               widths: ['*', '*'],
               body: [
                    [
                         { text: 'Imię i nazwisko administratora', style: 'list' },
                         { text: data.fullNameAdmin, style: 'list' },
                    ],
                    [
                         {
                              text: 'REGON',
                              style: 'list',
                         },
                         { text: data.regon, style: 'list' },
                    ],
                    [
                         {
                              text: 'KRS',
                              style: 'list',
                         },
                         { text: data.krs, style: 'list' },
                    ],
               ],
          },
     });

     // data.fullNameAdmin ? content.push(sectionList(`Imię i nazwisko administratora ${data.fullNameAdmin}`)) : null;

     // data.regon ? content.push(sectionList(`REGON ${data.regon}`)) : null;

     // data.krs ? content.push(sectionList(`KRS ${data.krs}`)) : null;

     content.push(sectionItem('2B. Adres siedziby administratora danych'));
     content.push({
          layout: 'noBorders',
          table: {
               headerRows: 0,
               widths: ['*', '*'],
               body: [
                    [
                         { text: 'Ulica', style: 'list' },
                         { text: `${data.street} ${data.numberHouse} ${data.numberflat}`, style: 'list' },
                    ],
                    [
                         {
                              text: 'Miasto i kod pocztowy',
                              style: 'list',
                         },
                         { text: `${data.city} ${data.postCode}`, style: 'list' },
                    ],
                    [
                         {
                              text: 'Województwo',
                              style: 'list',
                         },
                         { text: data.countyAdministrativeArea, style: 'list' },
                    ],
                    [
                         {
                              text: 'Powiat',
                              style: 'list',
                         },
                         { text: data.provinceAdministrativeArea, style: 'list' },
                    ],
                    [
                         {
                              text: 'Gmina',
                              style: 'list',
                         },
                         { text: data.communeAdministrativeArea, style: 'list' },
                    ],
                    [
                         {
                              text: 'Państwo',
                              style: 'list',
                         },
                         { text: data.country, style: 'list' },
                    ],
               ],
          },
     });
     // 'uodos.street'| translate
     // data.street
     //      ? content.push(sectionList(`Ulica ${data.street} ${data.numberHouse} ${data.numberflat}`))
     //      : null;
     // data.city ? content.push(sectionList(`Miasto i kod pocztowy ${data.city} ${data.postCode}`)) : null;
     // data.countyAdministrativeArea
     //      ? content.push(sectionList(`Województwo ${data.countyAdministrativeArea}`))
     //      : null;
     // data.provinceAdministrativeArea
     //      ? content.push(sectionList(`Powiat ${data.provinceAdministrativeArea}`))
     //      : null;
     // data.communeAdministrativeArea
     //      ? content.push(sectionList(`Gmina ${data.communeAdministrativeArea}`))
     //      : null;
     // 'uodos.country'| translate
     // data.country ? content.push(sectionList(`Państwo ${data.country}`)) : null;

     content.push(sectionItem('2C. Osoby uprawnione do reprezentowania administratora'));
     // 'uodos.section2d' | translate
     content.push(sectionItem('2D. Pełnomocnik'));

     data.applicationCompletedTheRepresentative
          ? content.push(sectionList('Wniosek wypełniany przez pełnomocnika'))
          : null;
     // 'uodos.section2e' | translate
     content.push(sectionItem('2E. Inspektor ochrony danych'));
     content.push({
          layout: 'noBorders',
          table: {
               headerRows: 0,
               widths: ['*', '*'],
               body: [
                    [
                         { text: 'Imię i nazwisko', style: 'list' },
                         { text: data.nameDateContact, style: 'list' },
                    ],
                    [
                         {
                              text: 'Numer telefonu',
                              style: 'list',
                         },
                         { text: data.phoneNumber, style: 'list' },
                    ],
                    [
                         {
                              text: 'Email',
                              style: 'list',
                         },
                         { text: data.mail, style: 'list' },
                    ],
               ],
          },
     });

     // data.nameDateContact ? content.push(sectionList(`Imię i nazwisko ${data.nameDateContact}`)) : null;

     // data.phoneNumber ? content.push(sectionList(`Numer telefonu ${data.phoneNumber}`)) : null;

     // data.mail ? content.push(sectionList(`Email ${data.mail}`)) : null;

     //'uodos.anInspectorHasNotBeenAppointed' | translate
     data.anInspectorHasNotBeenAppointed
          ? content.push(sectionList('Inspektor nie został wyznaczony'))
          : null;

     // 'uodos.descriptionSection2f' | translate
     content.push(sectionItem('2F. Inne podmioty uczestniczące'));

     return content;
}
