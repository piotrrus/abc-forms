import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import {
     sectionList,
     sectionListBold,
     sectionDescription,
     createTableNoBorder,
} from '../../../../shared/modules/pdf-export/printing.util';
import { contentSectionHeader } from '../../../../shared/modules/pdf-export/helpers/content-create.helper';
import { SECTION1 } from '../../enums/incident-titles.enum';

export function createSection1(data: DescriptionDTO): Content {
     const content: Content = [...contentSectionHeader(SECTION1.TITLE)];

     content.push(sectionDescription(SECTION1.DESC_1_A));

     const labels = [];
     const values = [];
     labels.push(sectionList(SECTION1.OPTIONAL_SIGN));
     values.push(sectionList(`${data.optionalSign}`));

     content.push(createTableNoBorder(labels, values));

     data.registrationComplet ? content.push(sectionListBold(SECTION1.SINGLE_REGISTRATION)) : null;

     if (data.registrationBegin) {
          content.push(sectionListBold(SECTION1.INITIAL_REGISTRATION));
          const labels = [];
          const values = [];
          labels.push(sectionList('Przybliżona data uzupełnienia zgłoszenia'));
          values.push(sectionList(`${data.addDateReopen?.toString()}`));

          content.push(createTableNoBorder(labels, values));
     }

     if (data.registrationCompletModify) {
          content.push(sectionListBold(SECTION1.ADDITIONAL_REGISTRATION));

          const labels = [];
          const values = [];
          labels.push(sectionList('Data poprzedniego zgłoszenia'));
          labels.push(sectionList('Podaj sygnaturę sprawy UODO'));

          values.push(sectionList(`${data.addDateOld}`));
          values.push(sectionList(`${data.addTaskSignUodo}`));

          content.push(createTableNoBorder(labels, values));
     }

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

     content.push(createTableNoBorder(labelsOther, valuesOther));

     return content;
}
