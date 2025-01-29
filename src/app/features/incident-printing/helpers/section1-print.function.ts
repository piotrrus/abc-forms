import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { sectionDescription, sectionHeader, sectionList } from './printing.util';

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
     let signatureText = 'Sygnatura sprawy';
     data.optionalSign ? (signatureText = `${signatureText} ${data.optionalSign}`) : signatureText;
     content.push(sectionList(signatureText));

     // 'uodos.registrationComplet' | translate"
     data.registrationComplet ? content.push(sectionList('Zgłoszenie kompletne/jednorazowe')) : null;

     // 'uodos.registrationBegin' | translate"
     if (data.registrationBegin) {
          content.push(sectionList('Zgłoszenie wstępne'));
          data.addDatereopen ? content.push(sectionList(data.addDatereopen?.toString())) : null;
     }

     // 'uodos.registrationCompletModify' | translate"
     // uodos.addTaskSignUodo, uodos.addDateold
     if (data.registrationCompletModify) {
          content.push(sectionList('Zgłoszenie uzupełniające/zmieniające'));

          const prevRegistratioDate = 'Data poprzedniego zgłoszenia';
          const uodoSignature = 'Data poprzedniego zgłoszenia';

          data.addDateold
               ? content.push(sectionList(`${prevRegistratioDate} ${data.addDateold?.toString()}`))
               : prevRegistratioDate;

          data.addTaskSignUodo
               ? content.push(sectionList(`${uodoSignature} ${data.addTaskSignUodo?.toString()}`))
               : uodoSignature;
     }

     // 'uodos.theViolationHasBeenReportedOtherCoutry' | translate
     const otherCoutryViolationReported =
          'Naruszenie zostało lub zostanie zgłoszone organowi ochrony danych osobowych w innym państwie';
     const otherCoutryViolationReportedText = data.theViolationHasBeenReportedOtherCoutry
          ? `${otherCoutryViolationReported} TAK`
          : `${otherCoutryViolationReported} NIE`;

     content.push(sectionList(otherCoutryViolationReportedText));

     // data.theViolationHasBeenReportedOtherCoutry ? content.push(sectionList('TAK')) : 'NIE';

     return content;
}
