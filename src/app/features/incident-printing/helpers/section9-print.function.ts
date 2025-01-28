import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { BLOCK_STYLES } from '../enums/block-styles.enum';

export function createSection9(data: DescriptionDTO): Content {
     const content: Content = [];

     content.push({ text: '9. Środki bezpieczeństwa i środki zaradcze', style: 'sectionHeader' });

     content.push({
          text: '9A. Ogólny opis technicznych i organizacyjnych środków bezpieczeństwa dotychczas stosowanych',
          style: 'sectionItem',
     });
     data.section9a ? content.push({ text: data.section9a, style: BLOCK_STYLES.LIST, }) : null;

     content.push({
          text: '9B. Środki bezpieczeństwa zastosowane lub proponowane w celu zminimalizowana ryzyka ponownego wystąpienia naruszenia',
          style: 'sectionItem',
     });
     data.section9b ? content.push({ text: data.section9b, style: BLOCK_STYLES.LIST, }) : null;

     content.push({
          text: '9C. Środki zastosowane lub proponowane w celu zaradzenia naruszeniu i zminimalizowania negatywnych skutków dla osób, których dane dotyczą',
          style: 'sectionItem',
     });
     data.section9c ? content.push({ text: data.section9c, style: BLOCK_STYLES.LIST, }) : null;

     return content;
}
