import { ContentTable } from 'pdfmake/interfaces';
import { BLOCK_STYLES } from '../enums/block-styles.enum';

export function sectionHeader(label: string): SectionContent {
     return { text: label, style: BLOCK_STYLES.SECTION_HEADER };
}

export function sectionDescription(label: string): SectionContent {
     return { text: label, style: BLOCK_STYLES.DESCRIPTION };
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

export function createTable(tableData: TableData[]): ContentTable {
     return {
          layout: 'noBorders',
          table: {
               headerRows: 0,
               widths: ['*', '*'],
               body: [createContentTable(tableData)],
          },
     };
}

export function createContentTable(tableData: TableData[]): SectionContent[] {
     const tableArr: any[] = [];
     // [
     //      { text: 'Data i czas zaistnienia/rozpoczęcia naruszenia', style: 'list' },
     //      { text: startEnd, style: 'list' },
     // ],
     tableData.forEach((data) => {
          const body = [
               { text: data.description, style: 'list' },
               { text: data.value, style: 'list' },
          ];
          tableArr.push(body);
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
