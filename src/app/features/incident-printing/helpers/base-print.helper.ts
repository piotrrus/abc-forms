import { Injectable } from '@angular/core';
import { Content, TDocumentDefinitions } from 'pdfmake/interfaces';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Injectable()
export class BasePrintHelper {
     protected createPdf(content: Content, pdfFileName: string): void {
          const docDefinition: TDocumentDefinitions = {
               content: content,
               styles: {
                    header: { fontSize: 16, bold: false, margin: [50, 0, 0, 10] },
                    subheader: { fontSize: 12, bold: false, margin: [0, 0, 0, 10] },
                    list: { fontSize: 8, bold: false, margin: [25, 0, 0, 10] },
                    sectionHeader: { fontSize: 10, bold: true, margin: [0, 20, 0, 10] },
                    sectionItem: { fontSize: 9, bold: true, margin: [10, 20, 0, 10] },
                    footer: { fontSize: 10 },
                    description: { fontSize: 8, bold: false, margin: [12, 0, 0, 10], color: 'grey' },
               },
          };
          pdfMake.createPdf(docDefinition).download(`${pdfFileName}.pdf`);
     }
}
