import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { sectionItem, sectionList } from '../helpers/printing.util';
import { contentSectionHeader } from '../helpers/content-create.helper';
import { SECTION9 } from '../enums/incident-titles.enum';

export function createSection9(data: DescriptionDTO): Content {
     const content: Content = [...contentSectionHeader(SECTION9.TITLE)];

     content.push(sectionItem(SECTION9.DESC_9A));
     data.section9a ? content.push(sectionList(data.section9a)) : null;

     content.push(sectionItem(SECTION9.DESC_9B));
     data.section9b ? content.push(sectionList(data.section9b)) : null;

     content.push(sectionItem(SECTION9.DESC_9C));
     data.section9c ? content.push(sectionList(data.section9c)) : null;

     return content;
}
