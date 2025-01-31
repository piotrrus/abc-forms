import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { sectionDescription, sectionHeader, sectionList, sectionListBold } from './printing.util';

export function createSection1(data: DescriptionDTO): Content {
     const content: Content = [];
     //'uodos.section1' | translate
     content.push(sectionHeader('1. Typ zgloszenia'));
     //'uodos.section1Desc' | translate
     content.push(
          sectionDescription(
               'Wskaż czy zgłaszasz naruszenie ochrony danych osobowych mające charakter jednorazowego zdarzenia (np. zgubienie, kradzież nośnika danych, przypadkowe wysłanie danych osobie nieuprawnionej), czy przygotowujesz wstępne zgłoszenie, które uzupełnisz później, lub czy uzupełniasz lub zmieniasz wcześniejsze zgłoszenie'
          )
     );

     // 'uodos.optionalSign' | translate

     content.push({
          layout: 'noBorders',
          table: {
               headerRows: 0,
               widths: ['*', '*'],
               body: [
                    [
                         {
                              text: 'Sygnatura sprawy',
                              style: 'list',
                         },
                         { text: data.optionalSign, style: 'list' },
                    ],
               ],
          },
     });
     // 'uodos.registrationComplet' | translate
     data.registrationComplet ? content.push(sectionListBold('Zgłoszenie kompletne/jednorazowe')) : null;

     // 'uodos.registrationBegin' | translate"
     if (data.registrationBegin) {
          content.push(sectionListBold('Zgłoszenie wstępne'));
          data.addDatereopen
               ? content.push(
                      sectionList(
                           `Przybliżona data uzupełnienia zgłoszenia ${data.addDatereopen?.toString()}`
                      )
                 )
               : null;
     }

     // 'uodos.registrationCompletModify' | translate"
     if (data.registrationCompletModify) {
          content.push(sectionListBold('Zgłoszenie uzupełniające/zmieniające'));

          content.push({
               layout: 'noBorders',
               table: {
                    headerRows: 0,
                    widths: ['*', '*'],
                    body: [
                         [
                              {
                                   text: 'Data poprzedniego zgłoszenia',
                                   style: 'list',
                              },
                              { text: data.addDateold, style: 'list' },
                         ],
                         [
                              {
                                   text: 'Podaj sygnaturę sprawy UODO',
                                   style: 'list',
                              },
                              { text: data.addTaskSignUodo, style: 'list' },
                         ],
                    ],
               },
          });
     }

     // 'uodos.theViolationHasBeenReportedOtherCoutry' | translate
     const otherCoutryViolationReported =
          'Naruszenie zostało lub zostanie zgłoszone organowi ochrony danych osobowych w innym państwie';
     const otherCoutryViolationReportedText = data.theViolationHasBeenReportedOtherCountry
          ? `${otherCoutryViolationReported} TAK`
          : `${otherCoutryViolationReported} NIE`;

     content.push(sectionList(otherCoutryViolationReportedText));

     content.push({
          layout: 'noBorders',
          table: {
               headerRows: 0,
               widths: ['*', '*'],
               body: [
                    [
                         {
                              text: 'Nazwy organów, którym zostało lub zostanie zgłoszone naruszenie',
                              style: 'list',
                         },
                         { text: data.addNameDepart, style: 'list' },
                    ],
                    [
                         {
                              text: 'Sygnatura/numer zgłoszenia do innego organu',
                              style: 'list',
                         },
                         { text: data.addSignatureRegistration, style: 'list' },
                    ],
               ],
          },
     });

     return content;
}
