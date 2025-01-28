import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { BLOCK_STYLES } from '../enums/block-styles.enum';

export function createSection6(data: DescriptionDTO): Content {
     const content: Content = [];

     content.push({ text: '6. Kategorie danych osobowych', style: 'sectionHeader' });
     content.push({ text: 'UWAGA: W zgłoszeniu nie podawaj konkretnych osób', style: 'BLOCK_STYLES.DESCRIPTION' });

     content.push({
          text: '6A. Dane podstawowe',
          style: 'sectionItem',
     });

     data.surnamesAndNames
          ? content.push({
               text: 'Nazwiska i imiona',
               style: BLOCK_STYLES.LIST,
          })
          : null;
     data.surnamesAndNames
          ? content.push({
               text: 'Nazwiska i imiona',
               style: BLOCK_STYLES.LIST,
          })
          : null;
     data.namesParents1
          ? content.push({
               text: 'Imiona rodziców',
               style: BLOCK_STYLES.LIST,
          })
          : null;
     data.birthData
          ? content.push({
               text: 'Data urodzenia',
               style: BLOCK_STYLES.LIST,
          })
          : null;
     data.numberaAccountBank
          ? content.push({
               text: 'Numer rachunku bankowego',
               style: BLOCK_STYLES.LIST,
          })
          : null;
     data.adressliving
          ? content.push({
               text: 'Adres zamieszkania lub pobytu',
               style: BLOCK_STYLES.LIST,
          })
          : null;
     data.pesel
          ? content.push({
               text: 'Numer ewidencyjny PESEL',
               style: BLOCK_STYLES.LIST,
          })
          : null;
     data.addressMail
          ? content.push({
               text: 'Adres e-mail',
               style: BLOCK_STYLES.LIST,
          })
          : null;

     data.loginPassword
          ? content.push({
               text: 'Nazwa użytkownika i/lub hasło',
               style: BLOCK_STYLES.LIST,
          })
          : null;

     data.dataFromMoney
          ? content.push({
               text: 'Dane dotyczące zarobków i/lub posiadanego majątku',
               style: BLOCK_STYLES.LIST,
          })
          : null;
     data.surnameMother
          ? content.push({
               text: 'Nazwisko rodowe matki',
               style: BLOCK_STYLES.LIST,
          })
          : null;

     data.serialNumberPersonallDocument
          ? content.push({
               text: 'Seria i numer dowodu osobistego',
               style: BLOCK_STYLES.LIST,
          })
          : null;

     data.phoneNumer
          ? content.push({
               text: 'Numer telefonu',
               style: BLOCK_STYLES.LIST,
          })
          : null;

     data.imagePerson
          ? content.push({
               text: 'Wizerunek',
               style: BLOCK_STYLES.LIST,
          })
          : null;
     data.other
          ? content.push({
               text: 'Inne, wskaż jakie:',
               style: BLOCK_STYLES.LIST,
          })
          : null;
     //todo add other txt data

     content.push({
          text: '6B. Dane szczególnej kategorii',
          style: 'sectionItem',
     });

     data.dataAboutRacialEthnicOrigin
          ? content.push({
               text: 'Dane o pochodzeniu rasowym lub etnicznym',
               style: BLOCK_STYLES.LIST,
          })
          : null;
     data.dataAboutPolitic
          ? content.push({
               text: 'Dane o poglądach politycznych',
               style: BLOCK_STYLES.LIST,
          })
          : null;
     data.dataAboutReligion
          ? content.push({
               text: 'Dane o przekonaniach religijnych lub światopoglądowych',
               style: BLOCK_STYLES.LIST,
          })
          : null;
     data.dataAboutSocjal
          ? content.push({
               text: 'Dane o przynależności do związków zawodowych',
               style: BLOCK_STYLES.LIST,
          })
          : null;
     data.dataAboutSexual
          ? content.push({
               text: 'Dane dotyczące seksualności lub orientacji seksualnej',
               style: BLOCK_STYLES.LIST,
          })
          : null;
     data.dataAboutHealth
          ? content.push({
               text: 'Dane dotyczące zdrowia',
               style: BLOCK_STYLES.LIST,
          })
          : null;
     data.dataAboutGenetic
          ? content.push({
               text: 'Dane genetyczne',
               style: BLOCK_STYLES.LIST,
          })
          : null;
     data.dataAboutBiometric
          ? content.push({
               text: 'Dane biometryczne w celu jednoznacznego zidentyfikowania osoby fizycznej',
               style: BLOCK_STYLES.LIST,
          })
          : null;

     content.push({
          text: '6C. Dane o których mowa w RODO',
          style: 'sectionItem',
     });
     data.dataAboutGuiltyverdicts
          ? content.push({
               text: 'Dane dotyczące wyroków skazujących',
               style: BLOCK_STYLES.LIST,
          })
          : null;
     data.dataAboutProhibitedActs
          ? content.push({
               text: 'Dane dotyczące czynów zabronionych',
               style: BLOCK_STYLES.LIST,
          })
          : null;
     data.dataAboutOther
          ? content.push({
               text: 'Inne',
               style: BLOCK_STYLES.LIST,
          })
          : null;
     //todo add other txt data
     return content;
}
