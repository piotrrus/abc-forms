import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { sectionHeader, sectionItem, sectionList } from './printing.util';

export function createSection8(data: DescriptionDTO): Content {
     const content: Content = [];

     content.push(sectionHeader('8. Możliwe konsekwencje'));

     content.push(
          sectionItem(
               '8A. Uszczerbek fizyczny, majątkowy, niemajątkowy lub inne znaczące konsekwencje dla osoby, której dane dotyczą'
          )
     );
     data.lossControlOverPersonalData
          ? content.push(sectionList('Utrata kontroli nad własnymi danymi osobowymi'))
          : null;
     data.financialLoss ? content.push(sectionList('Strata finansowa')) : null;
     data.limitationAbilityToExerciseRightsRodo
          ? content.push(sectionList('Ograniczenie możliwości realizowania praw z art. 15-22 RODO'))
          : null;
     data.limitationAbilityToExerciseRights
          ? content.push(sectionList('Ograniczenie możliwości realizowania praw'))
          : null;
     data.discrimination ? content.push(sectionList('Dyskryminacja')) : null;
     data.identityTheftFraud ? content.push(sectionList('Kradzież lub sfałszowanie tożsamości')) : null;
     data.infringementGoodName ? content.push(sectionList('Naruszenie dobrego imienia')) : null;
     data.lossConfidentialityPersonalDataProtectedProfessionalSecrecy
          ? content.push(sectionList('Utrata poufności danych osobowych chronionych tajemnicą zawodową'))
          : null;
     data.unauthorizedReversalPseudonymization
          ? content.push(sectionList('Nieuprawnione odwrócenie pseudonimizacji'))
          : null;
     data.section8aOthers ? content.push(sectionList('Inne')) : null;

     data.descWritelaw ? content.push(sectionList(data.descWritelaw)) : null;

     content.push(
          sectionItem('8B. Czy wystąpiło wysokie ryzyko naruszenia praw lub wolności osób fizycznych?')
     );

     data.section8B ? content.push(sectionList('TAK')) : content.push(sectionList('NIE'));

     data.justification ? content.push(sectionList(`Uzasadnienie  ${data.justification}`)) : null;

     return content;
}
