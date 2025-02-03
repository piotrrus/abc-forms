import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { sectionList, sectionListBold } from '../helpers/printing.util';
import { contentSectionHeader } from '../helpers/content-create.helper';

export function createSection7(data: DescriptionDTO): Content {
     const content: Content = [...contentSectionHeader('7. Kategorie osób')];

     data.employes ? content.push(sectionList('Pracownicy')) : null;

     data.users ? content.push(sectionList('Użytkownicy')) : null;

     data.subscribers ? content.push(sectionList('Subskrybenci')) : null;

     data.students ? content.push(sectionList('Studenci')) : null;

     data.studentsHightSchool ? content.push(sectionList('Uczniowie')) : null;

     data.uniformedServices ? content.push(sectionList('Służby mundurowe (np. wojsko, policja)')) : null;

     data.customers ? content.push(sectionList('Klienci (obecni i potencjalni)')) : null;

     data.customersPublic ? content.push(sectionList('Klienci podmiotów publicznych')) : null;

     data.patients ? content.push(sectionList('Pacjenci')) : null;

     data.kids ? content.push(sectionList('Dzieci')) : null;

     data.peopleWithSpecialNeeds
          ? content.push(
                 sectionList('Osoby o szczególnych potrzebach (np. osoby starsze, niepełnosprawne itp.)')
            )
          : null;
     //{{ 'uodos.detailedDescriptionOfCategoriesPersonsAffectedThebreach'| translate }}
     content.push(sectionListBold('Szczegółowy opis kategorii osób, których dotyczy naruszenie:'));

     data.descDetailedDescriptionOfCategoriesPersonsAffectedThebreach
          ? content.push(sectionList(data.descDetailedDescriptionOfCategoriesPersonsAffectedThebreach))
          : null;

     return content;
}
