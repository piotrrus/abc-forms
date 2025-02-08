import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { listDescription, sectionItem, sectionList } from '../helpers/printing.util';
import { contentSectionHeader } from '../helpers/content-create.helper';
import { SECTION4 } from '../enums/incident-titles.enum';

export function createSection4(data: DescriptionDTO): Content {
     const content: Content = [...contentSectionHeader(SECTION4.TITLE)];

     content.push(sectionItem(SECTION4.DESC_4A));

     data.descSection4a ? content.push(sectionList(data.descSection4a)) : null;

     content.push(sectionItem(SECTION4.DESC_4B));
     const formLabels4b: string[] = [];

     data.section4bcheckboxA ? formLabels4b.push(SECTION4.OPTION_4B_A) : null;
     data.section4bcheckboxB ? formLabels4b.push(SECTION4.OPTION_4B_B) : null;
     data.section4bcheckboxC ? formLabels4b.push(SECTION4.OPTION_4B_C) : null;
     data.section4bcheckboxD ? formLabels4b.push(SECTION4.OPTION_4B_D) : null;
     data.section4bcheckboxE ? formLabels4b.push(SECTION4.OPTION_4B_E) : null;
     data.section4bcheckboxF ? formLabels4b.push(SECTION4.OPTION_4B_F) : null;
     data.section4bcheckboxG ? formLabels4b.push(SECTION4.OPTION_4B_G) : null;
     data.section4bcheckboxH ? formLabels4b.push(SECTION4.OPTION_4B_H) : null;
     data.section4bcheckboxI ? formLabels4b.push(SECTION4.OPTION_4B_I) : null;
     data.section4bcheckboxJ ? formLabels4b.push(SECTION4.OPTION_4B_J) : null;
     data.section4bcheckboxK ? formLabels4b.push(SECTION4.OPTION_4B_K) : null;
     data.section4bcheckboxL ? formLabels4b.push(SECTION4.OPTION_4B_L) : null;
     data.section4bcheckboxM ? formLabels4b.push(SECTION4.OPTION_4B_M) : null;

     formLabels4b.forEach((label) => {
          content.push(sectionList(label));
     });

     content.push(sectionItem(SECTION4.DESC_4C));

     const formLabels4c: string[] = [];

     formLabels4c.push(SECTION4.OPTION_4C_A);
     data.descriptionSection4Ca ? formLabels4c.push(data.descriptionSection4Ca) : null;
     formLabels4c.push(SECTION4.OPTION_4C_B);
     data.descriptionSection4Cb ? formLabels4c.push(data.descriptionSection4Cb) : null;
     formLabels4c.push(SECTION4.OPTION_4C_C);
     data.descriptionSection4Cc ? formLabels4c.push(data.descriptionSection4Cc) : null;

     formLabels4c.forEach((label) => {
          content.push(sectionList(label));
     });

     content.push(sectionItem(SECTION4.DESC_4D));
     const formLabels4d: string[] = [];

     data.internalActionUnintentional ? formLabels4d.push(SECTION4.OPTION_4D_A) : null;
     data.externalActionUnintentional ? formLabels4d.push(SECTION4.OPTION_4D_B) : null;
     data.internalActionIntentional ? formLabels4d.push(SECTION4.OPTION_4D_C) : null;
     data.externalActionIntentional ? formLabels4d.push(SECTION4.OPTION_4D_D) : null;

     formLabels4d.forEach((label) => {
          content.push(sectionList(label));
     });

     content.push(sectionItem(SECTION4.DESC_4E));

     data.breachOfDataConfidentiality ? content.push(sectionList(SECTION4.OPTION_4E_A)) : null;
     data.breachOfDataConfidentiality ? content.push(listDescription(SECTION4.OPTION_4E_B)) : null;
     data.dataIntegrityBreach ? content.push(sectionList(SECTION4.OPTION_4E_C)) : null;
     data.dataIntegrityBreach ? content.push(listDescription(SECTION4.OPTION_4E_D)) : null;
     data.dataAvailabilityViolation ? content.push(sectionList(SECTION4.OPTION_4E_E)) : null;
     data.dataAvailabilityViolation ? content.push(listDescription(SECTION4.OPTION_4E_F)) : null;

     content.push(sectionItem(SECTION4.DESC_4F));

     const kidsIndidentText = data.section4FKids ? SECTION4.OPTION_4F_A : SECTION4.OPTION_4F_B;

     content.push(sectionList(kidsIndidentText));

     return content;
}
