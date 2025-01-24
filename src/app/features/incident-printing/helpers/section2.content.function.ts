import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from './models/desription-dto.ts';

export function createSection2AdminData(data: DescriptionDTO): Content {
    this.content = [];
    // this.content.push({ text: 'uodos.fullNameAdmin'  + data.fullNameAdmin ? data.fullNameAdmin : '', style: 'list' });
    //table
    // this.content.push({ text: 'uodos.nip'  + data.nip ? data.nip : '', style: 'list' });
    // this.content.push({ text: 'uodos.regon'  + data.regon ? data.regon : '', style: 'list' });
    // this.content.push({ text: 'uodos.krs'  + data.krs ? data.krs : '', style: 'list' });

    // this.content.push({ text: 'uodos.forSectorPublic'  + data.krs ? data.forSectorPublic : '', style: 'list' });
    // this.content.push({ text: 'uodos.forSectorPrivate'  + data.forSectorPrivate ? data.forSectorPrivate : '', style: 'list' });
    return this.content;
}

export function createSection2AdminAddress(data: DescriptionDTO): Content {
    this.content = [];
    //table
    // this.content.push({ text: 'uodos.street'  + data.street ? data.street : '', style: 'list' });
    // this.content.push({ text: 'uodos.city'  + data.city ? data.city : '', style: 'list' });
    // this.content.push({ text: 'uodos.countyAdministrativeArea'  + data.countyAdministrativeArea ? data.countyAdministrativeArea : '', style: 'list' });
    // this.content.push({ text: 'uodos.communeAdministrativeArea'  + data.communeAdministrativeArea ? data.communeAdministrativeArea : '', style: 'list' });

      
        // this.content.push({ text: 'uodos.provinceAdministrativeArea'  + data.provinceAdministrativeArea ? data.provinceAdministrativeArea : '', style: 'list' });
          // this.content.push({ text: 'uodos.numberHouse'  + data.numberHouse ? data.numberHouse : '', style: 'list' });
            // this.content.push({ text: 'uodos.postCode'  + data.postCode ? data.postCode : '', style: 'list' });
            // this.content.push({ text: 'uodos.country'  + data.country ? data.country : '', style: 'list' });
    return this.content;
}

export function createListItem(data: string): contentList {

    return { text: data, style: 'list' }
}

export interface contentList {
    text: string;
    style: string;
}