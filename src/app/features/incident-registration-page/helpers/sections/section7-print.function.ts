import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { sectionList, sectionListBold } from '@shared/modules/pdf-export/printing.util';
import { contentSectionHeader } from '@shared/modules/pdf-export/helpers/content-create.helper';
import { SECTION7 } from '../../enums/incident-titles.enum';

export function createSection7(data: DescriptionDTO): Content {
     const content: Content = [...contentSectionHeader(SECTION7.TITLE)];

     data.employes ? content.push(sectionList(SECTION7.OPTION_8A)) : null;

     data.users ? content.push(sectionList(SECTION7.OPTION_8B)) : null;

     data.subscribers ? content.push(sectionList(SECTION7.OPTION_8C)) : null;

     data.students ? content.push(sectionList(SECTION7.OPTION_8D)) : null;

     data.studentsHightSchool ? content.push(sectionList(SECTION7.OPTION_8E)) : null;

     data.uniformedServices ? content.push(sectionList(SECTION7.OPTION_8F)) : null;

     data.customers ? content.push(sectionList(SECTION7.OPTION_8G)) : null;

     data.customersPublic ? content.push(sectionList(SECTION7.OPTION_8H)) : null;

     data.patients ? content.push(sectionList(SECTION7.OPTION_8I)) : null;

     data.kids ? content.push(sectionList(SECTION7.OPTION_8I)) : null; //error

     data.peopleWithSpecialNeeds ? content.push(sectionList(SECTION7.OPTION_8J)) : null;

     content.push(sectionListBold(SECTION7.OPTION_8K));

     data.descDetailedDescriptionOfCategoriesPersonsAffectedThebreach
          ? content.push(sectionList(data.descDetailedDescriptionOfCategoriesPersonsAffectedThebreach))
          : null;

     return content;
}
