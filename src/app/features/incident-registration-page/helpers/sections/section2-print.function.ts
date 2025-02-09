import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import {
     createTableNoBorder,
     sectionItem,
     sectionList,
} from '../../../../shared/modules/pdf-export/printing.util';
import { contentSectionHeader } from '../../../../shared/modules/pdf-export/helpers/content-create.helper';
import { SECTION2 } from '../../enums/incident-titles.enum';

export function createSection2(data: DescriptionDTO): Content {
     const content: Content = [...contentSectionHeader(SECTION2.TITLE)];

     content.push(sectionItem(SECTION2.TITLE_2A));

     const labels = [];
     const values = [];

     labels.push(sectionList(SECTION2.ADMIN_FULL_NAME));
     labels.push(sectionList('REGON'));
     labels.push(sectionList('KRS'));

     values.push(sectionList(`${data.fullNameAdmin}`));
     values.push(sectionList(`${data.regon}`));
     values.push(sectionList(`${data.krs}`));

     content.push(createTableNoBorder(labels, values));

     content.push(sectionItem(SECTION2.TITLE_2B));

     const sectionBLabels = [];
     const sectionBValues = [];

     sectionBLabels.push(sectionList(SECTION2.STREET));
     sectionBLabels.push(sectionList(SECTION2.CITY));
     sectionBLabels.push(sectionList(SECTION2.VOIVODSHIP));
     sectionBLabels.push(sectionList(SECTION2.ADMINISTRATIVE_AREA));
     sectionBLabels.push(sectionList(SECTION2.COMMUNE));
     sectionBLabels.push(sectionList(SECTION2.COUNTRY));

     const street = `${data.street} ${data.numberHouse} ${data.numberflat}`;
     const city = `${data.city} ${data.postCode}`;
     const voivodship = data.countyAdministrativeArea ? data.countyAdministrativeArea?.toString() : '';
     const provinceAdministrativeArea = data.provinceAdministrativeArea
          ? data.provinceAdministrativeArea?.toString()
          : '';
     const communeAdministrativeArea = data.communeAdministrativeArea
          ? data.communeAdministrativeArea?.toString()
          : '';
     const country = data.country ? data.country?.toString() : '';

     sectionBValues.push(sectionList(street));
     sectionBValues.push(sectionList(city));
     sectionBValues.push(sectionList(voivodship));
     sectionBValues.push(sectionList(provinceAdministrativeArea));
     sectionBValues.push(sectionList(communeAdministrativeArea));
     sectionBValues.push(sectionList(country));

     content.push(createTableNoBorder(sectionBLabels, sectionBValues));
     content.push(sectionItem('2C. Osoby uprawnione do reprezentowania administratora'));

     data.personsAuthorizedRepresentAdministratorDTO.forEach((data) => {
          const personData: string = `Imię i nazwisko ${data.nameDateContact} Stanowisko ${data.position}`;
          data.nameDateContact ? content.push(sectionList(personData)) : null;
     });

     content.push(sectionItem(SECTION2.TITLE_2D));

     data.applicationCompletedTheRepresentative
          ? content.push(sectionList('Wniosek wypełniany przez pełnomocnika'))
          : null;

     const sectionELabels = [];
     const sectionEValues = [];
     sectionELabels.push(sectionList(SECTION2.REPRESENTANT_FULL_NAME));
     sectionELabels.push(sectionList(SECTION2.PHONE_NR));
     sectionELabels.push(sectionList('Email'));

     const dataProtectionOfficer = `${data.nameDateContact}`;
     const phoneNumber = `${data.phoneNumber}`;
     const email = `${data.mail}`;

     sectionEValues.push(sectionList(dataProtectionOfficer));
     sectionEValues.push(sectionList(phoneNumber));
     sectionEValues.push(sectionList(email));

     content.push(createTableNoBorder(sectionELabels, sectionEValues));
     data.anInspectorHasNotBeenAppointed
          ? content.push(sectionList('Inspektor nie został wyznaczony'))
          : null;

     content.push(sectionItem('2F. Inne podmioty uczestniczące'));

     data.entitiesAffectedInfringementDTO.forEach((data) => {
          const personData: string = `Imię i nazwisko ${data.nameAndSurname2f} Rola ${data.role}`;
          data.nameAndSurname2f ? content.push(sectionList(personData)) : null;
     });

     return content;
}
