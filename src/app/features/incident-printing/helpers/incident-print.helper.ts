import { Injectable } from '@angular/core';
import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from './models/desription-dto.ts';
// import { createHeaderSection } from './descriptions/header.desription.function';
// import { BasePrintHelper } from 'src/shared/helpers/base-print.helper';
//extends BasePrintHelper {
@Injectable()
export class Section11PrintHelper {
     private content: Content;

     public generatePdf(data: DescriptionDTO): void {
          this.content = [];

//           this.content.push(createHeaderSection(data));

//           this.content.push(ProductionPrintAssortsStrategy.generateList(data));

//           this.content.push({ text: 'Filc ' + data.felt ? data.felt : '', style: 'list' });

//           this.content.push(createFabricSection(data));

//           const pdfFileName = data.prod_order ? data.prod_order : data.client_nr;
//           this.createPdf(this.content, pdfFileName);
     }
}
