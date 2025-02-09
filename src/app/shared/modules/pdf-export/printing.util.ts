import { TableCell } from 'pdfmake/interfaces';
import { BLOCK_STYLES } from './enums/block-styles.enum';

export function sectionHeader(label: string): SectionContent {
     return { text: label, style: BLOCK_STYLES.SECTION_HEADER };
}

export function sectionDescription(label: string): SectionContent {
     return { text: label, style: BLOCK_STYLES.DESCRIPTION };
}
export function listDescription(label: string): SectionContent {
     return { text: label, style: BLOCK_STYLES.LIST_DESCRIPTION };
}
export function sectionItem(label: string): SectionContent {
     return { text: label, style: BLOCK_STYLES.SECTION_ITEM };
}
export function sectionListBold(label: string): SectionContent {
     return { text: label, style: BLOCK_STYLES.LIST_BOLD };
}
export function sectionList(label: string): SectionContent {
     return { text: label, style: BLOCK_STYLES.LIST };
}
export function sectionListTitle(label: string): SectionContent {
     return { text: label, style: BLOCK_STYLES.LIST_TITLE };
}

export function createTableNoBorder(labels: SectionContent[], values: SectionContent[]): any {
     const body: TableCell[] = [];
     body.push(labels);
     body.push(values);
     return {
          layout: 'noBorders',
          table: {
               headerRows: 0,
               widths: [300, '*'],
               body: [body],
          },
     };
}
//labels: SectionContent[], values: SectionContent[]
export function createTableWithHeaders(body: TableCell[]): any {
     // const body: TableCell[] = [];
     // body.push(labels);
     // body.push(values);
     // const body: TableCell[]  = [...labels, ...values];
     return {
          layout: 'lightHorizontalLines',
          table: {
               headerRows: 1,
               widths: ['*', 'auto', 100, '*'],
               body: [body],
          },
     };
}

export function createContentTable(tableData: TableData[]): SectionContent[] {
     let tableArr: SectionContent[] = [];
     tableData.forEach((data) => {
          tableArr.push({ text: data.description, style: 'list' }, { text: data.value, style: 'list' });
          data.description;
     });
     return tableArr;
}

export interface TableData {
     description: string;
     value: string;
}
export interface SectionContent {
     text: string;
     style: string;
}
