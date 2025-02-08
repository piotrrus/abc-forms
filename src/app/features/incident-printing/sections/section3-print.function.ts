import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { createTable, sectionItem, sectionList } from '../helpers/printing.util';

import * as dayjs from 'dayjs';
import { DATE_TIME_FORMAT } from '../enums/date-time.formats.enum';
import { contentSectionHeader } from '../helpers/content-create.helper';
import { SECTION3 } from '../enums/incident-titles.enum';

export function createSection3(data: DescriptionDTO): Content {
     const content: Content = [...contentSectionHeader(SECTION3.TITLE)];

     content.push(sectionItem(SECTION3.TITLE_3A));

     const labels = [];
     const values = [];

     labels.push(sectionList(SECTION3.DESC_3A_A));
     labels.push(sectionList(SECTION3.DESC_3A_B));
     labels.push(sectionList(SECTION3.DESC_3A_C));

     values.push(sectionList(`${data.dateDiscoveryInfringement}`));
     values.push(sectionList(`${data.methodDeterminingViolation}`));
     values.push(sectionList(`${data.dateInformationSubject}`));

     content.push(createTable(labels, values));

     content.push(sectionList(SECTION3.DESC_3A_D));
     data.reasonsForDelay ? content.push(sectionList(data.reasonsForDelay.toString())) : null;

     content.push(sectionItem(SECTION3.TITLE_3B));

     const startEnd = dayjs(data.dateTime3b).format(DATE_TIME_FORMAT);
     const dateEnd = dayjs(data.dateTimeEnd3b).format(DATE_TIME_FORMAT);

     const labels3B = [];
     const values3B = [];
     labels3B.push(sectionList(SECTION3.DESC_3B_A));
     labels3B.push(sectionList(SECTION3.DESC_3B_B));

     values3B.push(sectionList(startEnd));
     values3B.push(sectionList(dateEnd));

     content.push(createTable(labels3B, values3B));

     return content;
}
