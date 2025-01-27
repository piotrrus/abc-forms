import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';

export function createSection8(data: DescriptionDTO): Content {
     const content: Content = [];

     content.push({ text: '8. Możliwe konsekwencje', style: 'sectionHeader' });

     content.push({
          text: '8A. Uszczerbek fizyczny...?',
          style: 'sectionItem',
     });
     data.financialLoss
          ? content.push({
                 text: 'Strata finansowa',
                 style: 'list',
            })
          : null;

     data.lossControlOverPersonalData
          ? content.push({
                 text: 'Utrata kontroli nad własnymi danymi osobowymi',
                 style: 'list',
            })
          : null;

     content.push({
          text: '8B. Czy wystąpiło wysokie ryzyko naruszenia praw lub wolności osób fizycznych?',
          style: 'sectionItem',
     });
     data.section9a
          ? content.push({ text: 'TAK', style: 'list' })
          : content.push({ text: 'NIE', style: 'list' });

     return content;
}
