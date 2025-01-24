import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from './models/desription-dto.ts';

export function createSection2AdminData(data: DescriptionDTO): Content {

}

export function createListItem(data: string): contentList {

    return { text: data, style: 'list' }
}

export interface contentList {
    text: string;
    style: string;
}