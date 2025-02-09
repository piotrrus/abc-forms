import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { sectionList, sectionListBold, sectionListTitle } from '@shared/modules/pdf-export/printing.util';
import { SECTION11 } from '../../enums/incident-titles.enum';
import { contentSectionHeader } from '@shared/modules/pdf-export/helpers/content-create.helper';

export function createSection11(data: DescriptionDTO): Content {
     const content: Content = [...contentSectionHeader(SECTION11.TITLE)];

     data.theBreachIsCrossBorderInNature
          ? content.push(sectionListTitle(SECTION11.TRANSBORDER_TYPE))
          : content.push(sectionListTitle(SECTION11.NO_TRANSBORDER_TYPE));

     if (data.theBreachIsCrossBorderInNature) {
          content.push(sectionListBold(SECTION11.COUNTRIES_LIST));

          data.austria ? content.push(sectionList('Austria')) : null;
          data.belgium ? content.push(sectionList('Belgia')) : null;
          data.bulgaria ? content.push(sectionList('Bułgaria')) : null;
          data.croatia ? content.push(sectionList('Chorwacja')) : null;
          data.cyprus ? content.push(sectionList('Cypr')) : null;
          data.czechRepublic ? content.push(sectionList('Czechy')) : null;
          data.denmark ? content.push(sectionList('Dania')) : null;
          data.estonia ? content.push(sectionList('Estonia')) : null;
          data.finland ? content.push(sectionList('Finlandia')) : null;
          data.france ? content.push(sectionList('Francja')) : null;
          data.greece ? content.push(sectionList('Grecja')) : null;
          data.spain ? content.push(sectionList('Hiszpania')) : null;
          data.netherlands ? content.push(sectionList('Niderlandy')) : null;
          data.ireland ? content.push(sectionList('Irlandia')) : null;
          data.iceland ? content.push(sectionList('Islandia')) : null;
          data.lithuania ? content.push(sectionList('Litwa')) : null;
          data.latvia ? content.push(sectionList('Łotwa')) : null;
          data.liechtenstein ? content.push(sectionList('Lichtensztein')) : null;
          data.luxembourg ? content.push(sectionList('Luksemburg')) : null;
          data.malta ? content.push(sectionList('Malta')) : null;
          data.norway ? content.push(sectionList('Norwegia')) : null;
          data.germany ? content.push(sectionList('Niemcy')) : null;
          data.portugal ? content.push(sectionList('Portugalia')) : null;
          data.romania ? content.push(sectionList('Rumunia')) : null;
          data.slovakia ? content.push(sectionList('Słowacja')) : null;
          data.slovenia ? content.push(sectionList('Słowenia')) : null;
          data.hungary ? content.push(sectionList('Węgry')) : null;
          data.greatBritain ? content.push(sectionList('Wielka Brytania')) : null;
          data.italy ? content.push(sectionList('Włochy')) : null;
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
