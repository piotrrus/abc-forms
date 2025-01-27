import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';

export function createSection11(data: DescriptionDTO): Content {
     const content: Content = [];

     content.push({ text: '11. Przetwarzanie transgraniczne', style: 'sectionHeader' });

     data.theBreachIsCrossBorderInNature
          ? content.push({ text: 'Naruszenie ma charakter transgraniczny', style: 'listTitle' })
          : content.push({ text: 'Naruszenie nie ma charakteru transgranicznego', style: 'listTitle' });

     if (data.theBreachIsCrossBorderInNature) {
          content.push({ text: 'Lista krajów, których dotyczy naruszenie', style: 'list' });

          data.austria ? content.push({ text: 'Austria', style: 'list' }) : null;
          data.belgium ? content.push({ text: 'Austria', style: 'list' }) : null;
          data.bulgaria ? content.push({ text: 'Bułgaria', style: 'list' }) : null;
          data.croatia ? content.push({ text: 'Chorwacja', style: 'list' }) : null;
          data.cyprus ? content.push({ text: 'Cypr', style: 'list' }) : null;
          data.czechRepublic ? content.push({ text: 'Czechy', style: 'list' }) : null;
          data.denmark ? content.push({ text: 'Dania', style: 'list' }) : null;
          data.estonia ? content.push({ text: 'Estonia', style: 'list' }) : null;
          data.finland ? content.push({ text: 'Finlandia', style: 'list' }) : null;
          data.france ? content.push({ text: 'Francja', style: 'list' }) : null;
          data.greece ? content.push({ text: 'Grecja', style: 'list' }) : null;
          data.spain ? content.push({ text: 'Hiszpania', style: 'list' }) : null;
          data.netherlands ? content.push({ text: 'Niderlandy', style: 'list' }) : null;
          data.ireland ? content.push({ text: 'Irlandia', style: 'list' }) : null;
          data.iceland ? content.push({ text: 'Islandia', style: 'list' }) : null;
          data.lithuania ? content.push({ text: 'Litwa', style: 'list' }) : null;
          data.latvia ? content.push({ text: 'Łotwa', style: 'list' }) : null;
          data.liechtenstein ? content.push({ text: 'Lichtensztein', style: 'list' }) : null;
          data.luxembourg ? content.push({ text: 'Luksemburg', style: 'list' }) : null;
          data.norway ? content.push({ text: 'Norwegia', style: 'list' }) : null;
          data.germany ? content.push({ text: 'Niemcy', style: 'list' }) : null;
          data.portugal ? content.push({ text: 'Portugalia', style: 'list' }) : null;
          data.romania ? content.push({ text: 'Rumunia', style: 'list' }) : null;
          data.slovakia ? content.push({ text: 'Słowacja', style: 'list' }) : null;
          data.slovenia ? content.push({ text: 'Słowenia', style: 'list' }) : null;
          data.malta ? content.push({ text: 'Malta', style: 'list' }) : null;
          data.hungary ? content.push({ text: 'Węgry', style: 'list' }) : null;
          data.greatBritain ? content.push({ text: 'Wielka Brytania', style: 'list' }) : null;
          data.italy ? content.push({ text: 'Włochy', style: 'list' }) : null;
     }
     return content;
}

export interface countryList {
     isCountry: boolean;
     name: string;
}

export interface contentList {
     text: string;
     style: string;
}
