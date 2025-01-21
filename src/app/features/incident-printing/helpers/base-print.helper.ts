// import { Injectable } from '@angular/core';
// import * as pdfMake from 'pdfmake/build/pdfmake';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts';
// import { Content, TDocumentDefinitions } from 'pdfmake/interfaces';
/* eslint-disable @typescript-eslint/no-explicit-any */
// (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

// @Injectable()
// export class BasePrintHelper {
//      public createPdf(content: Content, pdfFileName: string): void {
//           const docDefinition: TDocumentDefinitions = {
//                content: content,
//                styles: {
//                     header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
//                     subheader: { fontSize: 12, bold: false, margin: [0, 0, 0, 10] },
//                     article: { fontSize: 14, bold: true, margin: [0, 0, 0, 10] },
//                     list: { fontSize: 10, bold: false, margin: [25, 0, 0, 10] },
//                     fabric: { fontSize: 12, bold: false, margin: [0, 0, 0, 10] },
//                     footer: { fontSize: 10 },
//                },
//           };
//           pdfMake.createPdf(docDefinition).download(`${pdfFileName}.pdf`);
//      }
// }
