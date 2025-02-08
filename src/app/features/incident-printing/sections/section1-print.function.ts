import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { sectionList, sectionListBold, sectionDescription, createTable } from '../helpers/printing.util';
import { contentSectionHeader } from '../helpers/content-create.helper';
import { SECTION1 } from '../enums/incident-titles.enum';

export function createSection1(data: DescriptionDTO): Content {
     const content: Content = [...contentSectionHeader(SECTION1.TITLE)];

     content.push(sectionDescription(SECTION1.DESC_1_A));

     const labels = [];
     const values = [];
     labels.push(sectionList(SECTION1.OPTIONAL_SIGN));
     values.push(sectionList(`${data.optionalSign}`));

     content.push(createTable(labels, values));

     // content.push({
     //      layout: 'noBorders',
     //      table: {
     //           headerRows: 0,
     //           widths: [300, '*'],
     //           body: [
     //                [
     //                     {
     //                          text: 'Sygnatura sprawy',
     //                          style: 'list',
     //                     },
     //                     { text: data.optionalSign, style: 'list' },
     //                ],
     //           ],
     //      },
     // });
     // 'uodos.registrationComplet' | translate
     data.registrationComplet ? content.push(sectionListBold('Zgłoszenie kompletne/jednorazowe')) : null;

     // 'uodos.registrationBegin' | translate"
     if (data.registrationBegin) {
          content.push(sectionListBold('Zgłoszenie wstępne'));
          const labels = [];
          const values = [];
          labels.push(sectionList('Przybliżona data uzupełnienia zgłoszenia'));
          values.push(sectionList(`${data.addDatereopen?.toString()}`));

          content.push(createTable(labels, values));

          // data.addDatereopen
          //      ? content.push(
          //             sectionList(
          //                  `Przybliżona data uzupełnienia zgłoszenia ${data.addDatereopen?.toString()}`
          //             )
          //        )
          //      : null;
     }

     if (data.registrationCompletModify) {
          content.push(sectionListBold('Zgłoszenie uzupełniające/zmieniające'));

          const labels = [];
          const values = [];
          labels.push(sectionList('Data poprzedniego zgłoszenia'));
          labels.push(sectionList('Podaj sygnaturę sprawy UODO'));

          values.push(sectionList(`${data.addDateold}`));
          values.push(sectionList(`${data.addTaskSignUodo}`));

          content.push(createTable(labels, values));

          // content.push({
          //      layout: 'noBorders',
          //      table: {
          //           headerRows: 0,
          //           widths: ['*', '*'],
          //           body: [
          //                [
          //                     {
          //                          text: 'Data poprzedniego zgłoszenia',
          //                          style: 'list',
          //                     },
          //                     { text: data.addDateold, style: 'list' },
          //                ],
          //                [
          //                     {
          //                          text: 'Podaj sygnaturę sprawy UODO',
          //                          style: 'list',
          //                     },
          //                     { text: data.addTaskSignUodo, style: 'list' },
          //                ],
          //           ],
          //      },
          // });
     }

     // 'uodos.theViolationHasBeenReportedOtherCoutry' | translate
     const otherCoutryViolationReported =
          'Naruszenie zostało lub zostanie zgłoszone organowi ochrony danych osobowych w innym państwie';
     const otherCoutryViolationReportedText = data.theViolationHasBeenReportedOtherCountry
          ? `${otherCoutryViolationReported} TAK`
          : `${otherCoutryViolationReported} NIE`;

     content.push(sectionList(otherCoutryViolationReportedText));

     const labelsOther = [];
     const valuesOther = [];
     labelsOther.push(sectionList('Nazwy organów, którym zostało lub zostanie zgłoszone naruszenie'));
     labelsOther.push(sectionList('Sygnatura/numer zgłoszenia do innego organu'));

     valuesOther.push(sectionList(`${data.addNameDepart}`));
     valuesOther.push(sectionList(`${data.addSignatureRegistration}`));

     content.push(createTable(labelsOther, valuesOther));

     // content.push({
     //      layout: 'noBorders',
     //      table: {
     //           headerRows: 0,
     //           widths: [300, '*'],
     //           body: [
     //                [
     //                     {
     //                          text: 'Nazwy organów, którym zostało lub zostanie zgłoszone naruszenie',
     //                          style: 'list',
     //                     },
     //                     { text: data.addNameDepart, style: 'list' },
     //                ],
     //                [
     //                     {
     //                          text: 'Sygnatura/numer zgłoszenia do innego organu',
     //                          style: 'list',
     //                     },
     //                     { text: data.addSignatureRegistration, style: 'list' },
     //                ],
     //           ],
     //      },
     // });

     return content;
}
