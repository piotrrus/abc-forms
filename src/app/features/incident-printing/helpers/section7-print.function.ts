import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { BLOCK_STYLES } from '../enums/block-styles.enum';

export function createSection7(data: DescriptionDTO): Content {
     const content: Content = [];

     content.push({ text: '7. Kategorie osób', style: 'sectionHeader' });

     data.employes
          ? content.push({
                 text: 'Pracownicy',
                 style: BLOCK_STYLES.LIST,
            })
          : null;
     data.users
          ? content.push({
                 text: 'Użytkownicy',
                 style: BLOCK_STYLES.LIST,
            })
          : null;

     data.users
          ? content.push({
                 text: 'Subskrybenci',
                 style: BLOCK_STYLES.LIST,
            })
          : null;

     data.students
          ? content.push({
                 text: 'Studenci',
                 style: BLOCK_STYLES.LIST,
            })
          : null;

     data.studentsHightSchool
          ? content.push({
                 text: 'Uczniowie',
                 style: BLOCK_STYLES.LIST,
            })
          : null;

     data.uniformedServices
          ? content.push({
                 text: 'Służby mundurowe (np. wojsko, policja)',
                 style: BLOCK_STYLES.LIST,
            })
          : null;

     data.customers
          ? content.push({
                 text: 'Klienci (obecni i potencjalni)',
                 style: BLOCK_STYLES.LIST,
            })
          : null;

     data.customersPublic
          ? content.push({
                 text: 'Klienci podmiotów publicznych',
                 style: BLOCK_STYLES.LIST,
            })
          : null;

     data.patients
          ? content.push({
                 text: 'Pacjenci',
                 style: BLOCK_STYLES.LIST,
            })
          : null;

     data.kids
          ? content.push({
                 text: 'Dzieci',
                 style: BLOCK_STYLES.LIST,
            })
          : null;

     data.peopleWithSpecialNeeds
          ? content.push({
                 text: 'Osoby o szczególnych potrzebach (np. osoby starsze, niepełnosprawne itp.)',
                 style: BLOCK_STYLES.LIST,
            })
          : null;
     //{{ 'uodos.detailedDescriptionOfCategoriesPersonsAffectedThebreach'| translate }}
     content.push({
          text: 'Szczegółowy opis kategorii osób, których dotyczy naruszenie:',
          style: BLOCK_STYLES.DESCRIPTION,
     });
     data.descDetailedDescriptionOfCategoriesPersonsAffectedThebreach
          ? content.push({
                 text: data.descDetailedDescriptionOfCategoriesPersonsAffectedThebreach,
                 style: BLOCK_STYLES.LIST,
            })
          : null;

     return content;
}
