import { Injectable } from '@angular/core';
import { Content, ContentCanvas } from 'pdfmake/interfaces';
import { BasePrintHelper } from './base-print.helper';
import { DescriptionDTO } from 'src/description-dto';
import { createHeaderSection } from './header.incident.function';
import { createSection1 } from '../sections/section1-print.function';
import { createSection2 } from '../sections/section2-print.function';
import { createSection3 } from '../sections/section3-print.function';
import { createSection4 } from '../sections/section4-print.function';
import { createSection5 } from '../sections/section5-print.function';
import { createSection6 } from '../sections/section6-print.function';
import { createSection7 } from '../sections/section7-print.function';
import { createSection9 } from '../sections/section9-print.function';
import { createSection8 } from '../sections/section8-print.function';
import { createSection10 } from '../sections/section10-print.function';
import { createSection11 } from '../sections/section11-print.function';

@Injectable()
export class IncidentPrintHelper extends BasePrintHelper {
     public generatePdf(data: DescriptionDTO): void {
          const content: Content = [];
          const pdfFileName = 'incident-test';

          content.push(createHeaderSection());
          content.push(this.horizontalLine());

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

     private horizontalLine(): ContentCanvas {
          return {
               canvas: [
                    {
                         type: 'line',
                         lineColor: '#BDBDBD',
                         x1: 0,
                         y1: 5,
                         x2: 595 - 2 * 40,
                         y2: 5,
                         lineWidth: 1,
                    },
               ],
          };
     }
}
