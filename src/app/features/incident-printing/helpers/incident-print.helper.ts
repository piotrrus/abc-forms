// import { Injectable } from '@angular/core';
// import { Content } from 'pdfmake/interfaces';
// import { createHeaderSection } from './descriptions/header.desription.function';
// import { ProductionPrintAssortsStrategy } from './description-print-assorts.strategy';
// import { BasePrintHelper } from 'src/shared/helpers/base-print.helper';

// @Injectable()
// export class DescriptionPrintHelper extends BasePrintHelper {
//      private content: Content;

//      public generatePdf(data: ProductionDescriptionModel): void {
//           this.content = [];

//           this.content.push(createHeaderSection(data));

//           this.content.push(ProductionPrintAssortsStrategy.generateList(data));

//           this.content.push({ text: 'Filc ' + data.felt ? data.felt : '', style: 'list' });

//           this.content.push(createFabricSection(data));

//           const pdfFileName = data.prod_order ? data.prod_order : data.client_nr;
//           this.createPdf(this.content, pdfFileName);
//      }
// }
