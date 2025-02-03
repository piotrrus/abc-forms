import { Content } from 'pdfmake/interfaces';
import { sectionHeader, sectionItem, sectionList } from './printing.util';

export function contentSectionHeader(text: string) {
     const content: Content = [];
     content.push(sectionHeader(text));
     return content;
}

export function contentSectionList(text: string) {
     const content: Content = [];
     content.push(sectionList(text));
     return content;
}

export function contentSectionItem(text: string) {
     const content: Content = [];
     content.push(sectionItem(text));
     return content;
}

//sectionItem
