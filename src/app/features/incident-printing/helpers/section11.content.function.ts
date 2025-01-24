import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from './models/desription-dto.ts';

export function createSection11(data: DescriptionDTO): Content {

     data.theBreachIsCrossBorderInNature ? this.content.push(
          createListItem('uodos.theBreachIsCrossBorderInNature')) : null;

     const countries: countryList[] = [];
     countries.push({ isCountry: data.austria, name: 'uodos.austria' });
     countries.push({ isCountry: data.cyprus, name: 'uodos.cyprus' });
     countries.push({ isCountry: data.finland, name: 'uodos.finland' });
     countries.push({ isCountry: data.netherlands, name: 'uodos.netherlands' });
     countries.push({ isCountry: data.lithuania, name: 'uodos.lithuania' });
     countries.push({ isCountry: data.germany, name: 'uodos.germany' });
     countries.push({ isCountry: data.slovakia, name: 'uodos.slovakia' });
     countries.push({ isCountry: data.greatBritain, name: 'uodos.greatBritain' });
     countries.push({ isCountry: data.belgium, name: 'uodos.belgium' });
     countries.push({ isCountry: data.czechRepublic, name: 'uodos.czechRepublic' });
     countries.push({ isCountry: data.france, name: 'uodos.france' });
     countries.push({ isCountry: data.ireland, name: 'uodos.ireland' });
     countries.push({ isCountry: data.luxembourg, name: 'uodos.luxembourg' });
     countries.push({ isCountry: data.norway, name: 'uodos.norway' });
     countries.push({ isCountry: data.slovenia, name: 'uodos.slovenia' });
     countries.push({ isCountry: data.italy, name: 'uodos.italy' });
     countries.push({ isCountry: data.bulgaria, name: 'uodos.bulgaria' });
     countries.push({ isCountry: data.denmark, name: 'uodos.denmark' });
     countries.push({ isCountry: data.greece, name: 'uodos.greece' });
     countries.push({ isCountry: data.iceland, name: 'uodos.iceland' });
     countries.push({ isCountry: data.latvia, name: 'uodos.latvia' });
     countries.push({ isCountry: data.portugal, name: 'uodos.portugal' });
     countries.push({ isCountry: data.sweden, name: 'uodos.sweden' });
     countries.push({ isCountry: data.croatia, name: 'uodos.croatia' });
     countries.push({ isCountry: data.estonia, name: 'uodos.estonia' });
     countries.push({ isCountry: data.spain, name: 'uodos.spain' });
     countries.push({ isCountry: data.liechtenstein, name: 'uodos.liechtenstein' });
     countries.push({ isCountry: data.malta, name: 'uodos.malta' });
     countries.push({ isCountry: data.romania, name: 'uodos.romania' });
     countries.push({ isCountry: data.hungary, name: 'uodos.hungary' });

     for (let country of this.countries) {
          country.isCountry ? this.content.push(createListItem(country.name)) : null;
     }
     return this.content;
}

export function createListItem(data: string): contentList {

     return { text: data, style: 'list' }
}

export interface countryList {
     isCountry: boolean;
     name: string;
}

export interface contentList {
     text: string;
     style: string;
}
