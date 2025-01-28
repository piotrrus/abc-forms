import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { BLOCK_STYLES } from '../enums/block-styles.enum';

export function createSection8(data: DescriptionDTO): Content {
     const content: Content = [];

     content.push({ text: '8. Możliwe konsekwencje', style: 'sectionHeader' });

     content.push({
          text: '8A. Uszczerbek fizyczny, majątkowy, niemajątkowy lub inne znaczące konsekwencje dla osoby, której dane dotyczą',
          style: 'sectionItem',
     });
     data.lossControlOverPersonalData
          ? content.push({
                 text: 'Utrata kontroli nad własnymi danymi osobowymi',
                 style: BLOCK_STYLES.LIST,
            })
          : null;
     data.financialLoss
          ? content.push({
                 text: 'Strata finansowa',
                 style: BLOCK_STYLES.LIST,
            })
          : null;
     data.limitationAbilityToExerciseRightsRodo
          ? content.push({
                 text: 'Ograniczenie możliwości realizowania praw z art. 15-22 RODO',
                 style: BLOCK_STYLES.LIST,
            })
          : null;
     data.limitationAbilityToExerciseRights
          ? content.push({
                 text: 'Ograniczenie możliwości realizowania praw',
                 style: BLOCK_STYLES.LIST,
            })
          : null;
     data.discrimination
          ? content.push({
                 text: 'Dyskryminacja',
                 style: BLOCK_STYLES.LIST,
            })
          : null;
     data.identityTheftFraud
          ? content.push({
                 text: 'Kradzież lub sfałszowanie tożsamości',
                 style: BLOCK_STYLES.LIST,
            })
          : null;
     data.infringementGoodName
          ? content.push({
                 text: 'Naruszenie dobrego imienia',
                 style: BLOCK_STYLES.LIST,
            })
          : null;
     data.lossConfidentialityPersonalDataProtectedProfessionalSecrecy
          ? content.push({
                 text: 'Utrata poufności danych osobowych chronionych tajemnicą zawodową',
                 style: BLOCK_STYLES.LIST,
            })
          : null;
     data.unauthorizedReversalPseudonymization
          ? content.push({
                 text: 'Nieuprawnione odwrócenie pseudonimizacji',
                 style: BLOCK_STYLES.LIST,
            })
          : null;
     data.section8aOthers
          ? content.push({
                 text: 'Inne',
                 style: BLOCK_STYLES.LIST,
            })
          : null;

     data.descWritelaw
          ? content.push({
                 text: data.descWritelaw,
                 style: BLOCK_STYLES.LIST,
            })
          : null;

     content.push({
          text: '8B. Czy wystąpiło wysokie ryzyko naruszenia praw lub wolności osób fizycznych?',
          style: 'sectionItem',
     });

     data.section8B
          ? content.push({ text: 'TAK', style: BLOCK_STYLES.LIST })
          : content.push({ text: 'NIE', style: BLOCK_STYLES.LIST });

     data.justification
          ? content.push({ text: `Uzasadnienie  ${data.justification}`, style: BLOCK_STYLES.LIST })
          : null;

     return content;
}
