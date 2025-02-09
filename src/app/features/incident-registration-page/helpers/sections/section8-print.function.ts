import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import {
     sectionItem,
     sectionList,
     sectionListBold,
} from '../../../../shared/modules/pdf-export/printing.util';
import { contentSectionHeader } from '../../../../shared/modules/pdf-export/helpers/content-create.helper';
import { SECTION8 } from '../../enums/incident-titles.enum';
import { yesOrNoDescription } from '@shared/modules/pdf-export/helpers/yes-or-no-print.helper';

export function createSection8(data: DescriptionDTO): Content {
     const content: Content = [...contentSectionHeader(SECTION8.TITLE)];

     content.push(sectionItem(SECTION8.DESC_8A));

     data.lossControlOverPersonalData ? content.push(sectionList(SECTION8.OPTION_8A)) : null;
     data.financialLoss ? content.push(sectionList(SECTION8.OPTION_8B)) : null;
     data.limitationAbilityToExerciseRightsRodo ? content.push(sectionList(SECTION8.OPTION_8C)) : null;
     data.limitationAbilityToExerciseRights ? content.push(sectionList(SECTION8.OPTION_8D)) : null;
     data.discrimination ? content.push(sectionList(SECTION8.OPTION_8E)) : null;
     data.identityTheftFraud ? content.push(sectionList(SECTION8.OPTION_8F)) : null;
     data.infringementGoodName ? content.push(sectionList(SECTION8.OPTION_8G)) : null;
     data.lossConfidentialityPersonalDataProtectedProfessionalSecrecy
          ? content.push(sectionList(SECTION8.OPTION_8H))
          : null;
     data.unauthorizedReversalPseudonymization ? content.push(sectionList(SECTION8.OPTION_8I)) : null;

     // data.section8aOthers ? content.push(sectionList('Inne')) : null;

     data.section8aOthers && data.descWritelaw
          ? (content.push(sectionListBold(SECTION8.OPTION_8J)), content.push(sectionList(data.descWritelaw)))
          : null;

     content.push(sectionItem(SECTION8.DESC_8B));

     const yesOrNo = yesOrNoDescription(data.section8B);
     content.push(sectionList(yesOrNo));

     //  data.section8B ? content.push(sectionList('TAK')) : content.push(sectionList('NIE'));

     data.section8B && data.justification ? content.push(sectionList(data.justification)) : null;

     return content;
}
