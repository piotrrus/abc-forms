import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { sectionItem, sectionList } from '@shared/modules/pdf-export/printing.util';
import { contentSectionHeader } from '@shared/modules/pdf-export/helpers/content-create.helper';
import { SECTION6 } from '../../enums/incident-titles.enum';

export function createSection6(data: DescriptionDTO): Content {
     const content: Content = [...contentSectionHeader(SECTION6.TITLE)];

     content.push(sectionItem(SECTION6.TITLE_6A));

     data.surnamesAndNames ? content.push(sectionList('Nazwiska i imiona')) : null;
     data.namesParents1 ? content.push(sectionList('Imiona rodziców')) : null;

     data.birthData ? content.push(sectionList('Data urodzenia')) : null;
     data.numberaAccountBank ? content.push(sectionList('Numer rachunku bankowego')) : null;
     data.adressliving ? content.push(sectionList('Adres zamieszkania lub pobytu')) : null;

     data.pesel ? content.push(sectionList('Numer ewidencyjny PESEL')) : null;
     data.addressMail ? content.push(sectionList('Adres e-mail')) : null;
     data.loginPassword ? content.push(sectionList('Nazwa użytkownika i/lub hasło')) : null;

     data.dataFromMoney
          ? content.push(sectionList('Dane dotyczące zarobków i/lub posiadanego majątku'))
          : null;

     data.surnameMother ? content.push(sectionList('Nazwisko rodowe matki')) : null;

     data.serialNumberPersonallDocument ? content.push(sectionList('Seria i numer dowodu osobistego')) : null;

     data.phoneNumer ? content.push(sectionList('Numer telefonu')) : null;
     data.imagePerson ? content.push(sectionList('Wizerunek')) : null;
     data.other ? content.push(sectionList('Inne, wskaż jakie:')) : null;

     //todo add other txt data

     content.push(sectionItem(SECTION6.TITLE_6B));

     data.dataAboutRacialEthnicOrigin
          ? content.push(sectionList('Dane o pochodzeniu rasowym lub etnicznym'))
          : null;
     data.dataAboutPolitic ? content.push(sectionList('Dane o poglądach politycznych')) : null;

     data.dataAboutReligion
          ? content.push(sectionList('Dane o przekonaniach religijnych lub światopoglądowych'))
          : null;

     data.dataAboutSocjal ? content.push(sectionList('Dane o przynależności do związków zawodowych')) : null;

     data.dataAboutSexual
          ? content.push(sectionList('Dane dotyczące seksualności lub orientacji seksualnej'))
          : null;
     data.dataAboutHealth ? content.push(sectionList('Dane dotyczące zdrowia')) : null;

     data.dataAboutGenetic ? content.push(sectionList('Dane genetyczne')) : null;

     data.dataAboutBiometric
          ? content.push(
                 sectionList('Dane biometryczne w celu jednoznacznego zidentyfikowania osoby fizycznej')
            )
          : null;

     content.push(sectionItem('6C. Dane o których mowa w RODO'));

     data.dataAboutGuiltyverdicts ? content.push(sectionList('Dane dotyczące wyroków skazujących')) : null;

     data.dataAboutProhibitedActs ? content.push(sectionList('Dane dotyczące czynów zabronionych')) : null;

     data.dataAboutOther ? content.push(sectionList('Inne')) : null;
     //todo add other txt data
     return content;
}
