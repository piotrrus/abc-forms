import { Injectable } from '@angular/core';
import { Content } from 'pdfmake/interfaces';
import { BasePrintHelper } from '../../../shared/modules/pdf-export/helpers/base-print.helper';
import { DescriptionDTO } from 'src/description-dto';
import { createHeaderSection } from '../../../shared/modules/pdf-export/helpers/pdf-headers.function';
import {
     createSection1,
     createSection2,
     createSection3,
     createSection4,
     createSection5,
     createSection6,
     createSection7,
     createSection8,
     createSection9,
     createSection10,
     createSection11,
} from './sections/index';
import { separateLinePdf } from '@shared/modules/pdf-export/models/pdf-export-models';

@Injectable()
export class IncidentPrintHelper extends BasePrintHelper {
     constructor() {
          super();
     }

     public generatePdf(data: DescriptionDTO): void {
          const content: Content = [];
          const pdfFileName = 'incident-test';

          content.push(createHeaderSection());
          content.push(separateLinePdf);

          content.push(createSection1(data));
          content.push(createSection2(data));
          content.push(createSection3(data));
          content.push(createSection4(data));
          content.push(createSection5(data));
          content.push(createSection6(data));
          content.push(createSection7(data));
          content.push(createSection8(data));
          content.push(createSection9(data));
          content.push(createSection10(data));
          content.push(createSection11(data));

          this.createPdf(content, pdfFileName);
     }
}
