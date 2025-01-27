import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';

export function createSection6(data: DescriptionDTO): Content {
     const content: Content = [];

     content.push({ text: '6. Kategorie danych osobowych', style: 'sectionHeader' });
     content.push({ text: 'UWAGA: W zgłoszeniu nie podawaj konkretnych osób', style: 'description' });

     content.push({
          text: '6A. Dane podstawowe',
          style: 'sectionItem',
     });

     data.surnamesAndNames
          ? content.push({
                 text: 'Nazwiska i imiona',
                 style: 'list',
            })
          : null;
     data.imagePerson
          ? content.push({
                 text: 'Wizerunek',
                 style: 'list',
            })
          : null;

     content.push({
          text: '6B. Dane szczególnej kategorii',
          style: 'sectionItem',
     });

     data.dataAboutRacialEthnicOrigin
          ? content.push({
                 text: 'Dane o pochodzeniu rasowym lub etnicznym',
                 style: 'list',
            })
          : null;

     content.push({
          text: '6C. Dane o których mowa w RODO',
          style: 'sectionItem',
     });
     data.dataAboutGuiltyverdicts
          ? content.push({
                 text: 'Dane dotyczące wyroków skazujących',
                 style: 'list',
            })
          : null;

     return content;
}
