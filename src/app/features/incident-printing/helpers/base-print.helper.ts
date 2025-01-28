import { Injectable } from '@angular/core';
import { Content, TDocumentDefinitions } from 'pdfmake/interfaces';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts;

@Injectable()
export class BasePrintHelper {
     protected createPdf(content: Content, pdfFileName: string): void {
          const docDefinition: TDocumentDefinitions = {
               watermark: { text: 'N A S K', color: '#cccadf', opacity: 0.2, bold: true, italics: false },
               content: content,
               styles: {
                    header: { fontSize: 12, bold: false, margin: [120, 0, 0, 5] },
                    subheader: { fontSize: 12, bold: false, margin: [0, 0, 0, 5] },
                    listTitle: { fontSize: 8, bold: false, margin: [25, 0, 0, 5] },
                    list: { fontSize: 8, bold: false, margin: [25, 0, 0, 1] },
                    sectionHeader: { fontSize: 10, bold: true, margin: [0, 5, 0, 5] },
                    sectionItem: { fontSize: 9, bold: true, margin: [10, 5, 0, 3] },
                    footer: { fontSize: 10 },
                    description: { fontSize: 8, bold: false, margin: [12, 0, 0, 5], color: 'grey' },
               },
          };
          pdfMake.createPdf(docDefinition).download(`${pdfFileName}.pdf`);
     }
}
