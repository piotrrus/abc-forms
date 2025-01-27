import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';

export function createSection7(data: DescriptionDTO): Content {
     const content: Content = [];

     content.push({ text: '7. Kategorie osób', style: 'sectionHeader' });

     data.employes
          ? content.push({
                 text: 'Pracownicy',
                 style: 'list',
            })
          : null;

     data.users
          ? content.push({
                 text: 'Użytkownicy',
                 style: 'list',
            })
          : null;

     return content;
}
