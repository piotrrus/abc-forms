import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { contentSectionHeader } from '@shared/modules/pdf-export/helpers/content-create.helper';
import { createTableNoBorder, sectionList } from '@shared/modules/pdf-export/printing.util';
import { SECTION5 } from '../../enums/incident-titles.enum';

export function createSection5(data: DescriptionDTO): Content {
     const content: Content = [...contentSectionHeader(SECTION5.TITLE)];

     const labels = [];
     const values = [];

     labels.push(sectionList(SECTION5.APPROX_PERSON_NR));
     labels.push(sectionList(SECTION5.APPROX_PERSON_DATA_NR));

     values.push(sectionList(`${data.approximateNumberOfPeopleBreached}`));
     values.push(sectionList(`${data.approximateNumberOfPeopleBreachedEntry}`));

     content.push(createTableNoBorder(labels, values));

     return content;
}
