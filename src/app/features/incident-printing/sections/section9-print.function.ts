import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { sectionItem, sectionList } from '../helpers/printing.util';
import { contentSectionHeader } from '../helpers/content-create.helper';

export function createSection9(data: DescriptionDTO): Content {
     const content: Content = [...contentSectionHeader('9. Środki bezpieczeństwa i środki zaradcze')];

     content.push(
          sectionItem(
               '9A. Ogólny opis technicznych i organizacyjnych środków bezpieczeństwa dotychczas stosowanych'
          )
     );
     data.section9a ? content.push(sectionList(data.section9a)) : null;

     content.push(
          sectionItem(
               '9B. Środki bezpieczeństwa zastosowane lub proponowane w celu zminimalizowana ryzyka ponownego wystąpienia naruszenia'
          )
     );
     data.section9b ? content.push(sectionList(data.section9b)) : null;

     content.push(
          sectionItem(
               '9C. Środki zastosowane lub proponowane w celu zaradzenia naruszeniu i zminimalizowania negatywnych skutków dla osób, których dane dotyczą'
          )
     );
     data.section9c ? content.push(sectionList(data.section9c)) : null;

     return content;
}
