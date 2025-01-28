import { BLOCK_STYLES } from "../enums/block-styles.enum";

export function sectionHeader(label: string): SectionContent {
     return { text: label, style: BLOCK_STYLES.SECTION_HEADER };
}

export function sectionDescription(label: string): SectionContent {
     return { text: label, style: BLOCK_STYLES.DESCRIPTION };
}

export function sectionItem(label: string): SectionContent {
     return { text: label, style: BLOCK_STYLES.SECTION_ITEM };
}

export function sectionList(label: string): SectionContent {
     return { text: label, style: BLOCK_STYLES.LIST };
}
export function sectionListTitle(label: string): SectionContent {
     return { text: label, style: BLOCK_STYLES.LIST_TITLE };
}

export interface SectionContent {
     text: string;
     style: string;
}
