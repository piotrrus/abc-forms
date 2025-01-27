export function sectionHeader(label: string): SectionContent {
     return { text: label, style: 'sectionHeader' };
}

export function sectionDescription(label: string): SectionContent {
     return { text: label, style: 'description' };
}

export function sectionItem(label: string): SectionContent {
     return { text: label, style: 'sectionItem' };
}

export function sectionListTitle(label: string): SectionContent {
     return { text: label, style: 'listTitle' };
}

export interface SectionContent {
     text: string;
     style: string;
}
