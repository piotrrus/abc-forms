import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { BLOCK_STYLES } from '../enums/block-styles.enum';
import { sectionHeader, sectionItem, sectionList } from './printing.util';

export function createSection4(data: DescriptionDTO): Content {
     const content: Content = [];
     // {{ 'uodos.section4' | translate }}
     content.push(sectionHeader('4. Charakter naruszenia'));
     // { text: '4. Charakter naruszenia', style: BLOCK_STYLES.SECTION_HEADER });

     content.push(sectionItem('4A. Opisz szczegółowo na czym polegało naruszenie'));

     // content.push({
     //      // {{ 'uodos.section4a' | translate }}
     //      text: '4A. Opisz szczegółowo na czym polegało naruszenie',
     //      style: BLOCK_STYLES.SECTION_ITEM,
     // });
     data.descSection4a ? content.push(sectionList(data.descSection4a)) : null;
     // data.descSection4a ? content.push({ text: data.descSection4a, style: BLOCK_STYLES.LIST, }) : null;

     content.push(sectionItem('4B. Na czym polegało naruszenie?'));

     // content.push({
     //      // {{ 'uodos.section4b' | translate }}
     //      text: '4B. Na czym polegało naruszenie?',
     //      style: BLOCK_STYLES.SECTION_ITEM,
     // });

     // "'uodos.section4bcheckboxA' | translate"
     data.section4bcheckboxA
          ? content.push({ text: 'a) Zgubienie lub kradzież nośnika/urządzenia', style: BLOCK_STYLES.LIST })
          : null;
     data.section4bcheckboxB
          ? content.push({
                 text: 'b) Dokumentacja papierowa (zawierająca dane osobowe) zgubiona, skradziona lub pozostawiona w niezabezpieczonej lokalizacji',
                 style: BLOCK_STYLES.LIST,
            })
          : null;
     data.section4bcheckboxC
          ? content.push({
                 text: 'c) Korespondencja papierowa utracona przez operatora pocztowego lub otwarta przed zwróceniem jej do nadawcy',
                 style: BLOCK_STYLES.LIST,
            })
          : null;
     data.section4bcheckboxD
          ? content.push({
                 text: 'd) Nieuprawnione uzyskanie dostępu do informacji',
                 style: BLOCK_STYLES.LIST,
            })
          : null;
     data.section4bcheckboxE
          ? content.push({
                 text: 'e) Nieuprawnione uzyskanie dostępu do informacji poprzez złamanie zabezpieczeń',
            })
          : null;
     data.section4bcheckboxF
          ? content.push({
                 text: 'f) Złośliwe oprogramowanie ingerujące w poufność, integralność lub dostępność danych',
            })
          : null;
     data.section4bcheckboxG
          ? content.push({
                 text: 'g) Uzyskanie poufnych informacji przez pozornie zaufaną osobę w oficjalnej komunikacji elektronicznej, takiej jak e-mail czy komunikator internetowy (phishing)',
                 style: BLOCK_STYLES.LIST,
            })
          : null;
     data.section4bcheckboxH
          ? content.push({
                 text: 'h) Nieprawidłowa anonimizacja danych osobowych w dokumencie',
                 style: BLOCK_STYLES.LIST,
            })
          : null;
     data.section4bcheckboxI
          ? content.push({
                 text: 'i) Nieprawidłowe usunięcie/zniszczenie danych osobowych z nośnika/urządzenia elektronicznego przed jego zbyciem przez administratora',
                 style: BLOCK_STYLES.LIST,
            })
          : null;
     data.section4bcheckboxJ
          ? content.push({ text: 'j) Niezamierzona publikacja', style: BLOCK_STYLES.LIST })
          : null;
     data.section4bcheckboxK
          ? content.push({
                 text: 'k) Dane osobowe wysłane do niewłaściwego odbiorcy',
                 style: BLOCK_STYLES.LIST,
            })
          : null;
     data.section4bcheckboxL
          ? content.push({ text: 'l) Ujawnienie danych niewłaściwej osoby', style: BLOCK_STYLES.LIST })
          : null;
     data.section4bcheckboxM
          ? content.push({ text: 'm) Ustne ujawnienie danych osobowych', style: BLOCK_STYLES.LIST })
          : null;

     content.push(sectionItem('4C. Działanie złoliwego oprogramowania'));
     // content.push({
     //      // {{ 'uodos.section4c' | translate }}
     //      text: '4C. Działanie złoliwego oprogramowania',
     //      style: BLOCK_STYLES.SECTION_ITEM,
     // });
     content.push(
          sectionList(
               'a) Jeśli w ocenie administratora doszło wyłącznie do naruszenia dostępności danych, w jaki sposób stwierdzono, że nie doszło do naruszenia ich poufności?'
          )
     );
     // content.push({
     //      text: 'a) Jeśli w ocenie administratora doszło wyłącznie do naruszenia dostępności danych, w jaki sposób stwierdzono, że nie doszło do naruszenia ich poufności?',
     //      style: BLOCK_STYLES.LIST,
     // });
     data.descriptionSection4Ca ? content.push(sectionList(data.descriptionSection4Ca)) : null;
     //  data.descriptionSection4Ca ? content.push({ text: data.descriptionSection4Ca, style: BLOCK_STYLES.LIST, }) : null;

     content.push({
          text: 'b) Czy, a jeżeli tak, to w jakiej formie, złośliwe oprogramowanie poinformowało o konieczności uiszczenia opłaty w celu odzyskania dostępu do danych',
          style: BLOCK_STYLES.LIST,
     });
     data.descriptionSection4Cb ? content.push(sectionList(data.descriptionSection4Cb)) : null;
     //  data.descriptionSection4Cb ? content.push({ text: data.descriptionSection4Cb, style: BLOCK_STYLES.LIST, }) : null;
     content.push({
          text: 'c) Jeżeli doszło do utraty dostępności danych, to czy administrator był w posiadaniu kopii zapasowej, jeśli tak to w jakim czasie ją przywrócił?',
          style: BLOCK_STYLES.LIST,
     });
     data.descriptionSection4Cc
          ? content.push({ text: data.descriptionSection4Cc, style: BLOCK_STYLES.LIST })
          : null;

     content.push(sectionHeader('4D. Przyczyna naruszenia'));
     // content.push({
     //      text: '4D. Przyczyna naruszenia',
     //      style: BLOCK_STYLES.SECTION_HEADER,
     // });

     data.internalActionUnintentional
          ? content.push({ text: 'Wewnętrzne działanie niezamierzone', style: BLOCK_STYLES.LIST })
          : null;
     data.externalActionUnintentional
          ? content.push({ text: 'Zewnętrzne działanie niezamierzone', style: BLOCK_STYLES.LIST })
          : null;
     data.internalActionIntentional
          ? content.push({ text: 'Wewnętrzne działanie zamierzone', style: BLOCK_STYLES.LIST })
          : null;
     data.externalActionIntentional
          ? content.push({ text: 'Zewnętrzne działanie zamierzone', style: BLOCK_STYLES.LIST })
          : null;
     content.push(sectionHeader('4E. Charakter'));
     // content.push({
     //      text: '4E. Charakter',
     //      style: BLOCK_STYLES.SECTION_ITEM,
     // });

     //"'uodos.breachOfDataConfidentiality' | translate"
     data.breachOfDataConfidentiality
          ? content.push({ text: 'Naruszenie poufności danych', style: BLOCK_STYLES.LIST })
          : null;
     // {{ 'uodos.descbreachOfDataConfidentiality' | translate }}
     data.breachOfDataConfidentiality
          ? content.push({
                 text: 'Nieuprawnione lub przypadkowe ujawnienie bądź udostępnienie danych',
                 style: BLOCK_STYLES.DESCRIPTION,
            })
          : null;

     data.dataIntegrityBreach
          ? content.push({ text: 'Naruszenie integralności danych', style: BLOCK_STYLES.LIST })
          : null;
     //{{ 'uodos.descDataIntegrityBreach' | translate }}
     data.dataIntegrityBreach
          ? content.push({
                 text: 'Wprowadzenie nieuprawnionych zmian podczas odczytu, zapisu, transmisji lub przechowywania',
                 style: 'BLOCK_STYLES.DESCRIPTION',
            })
          : null;

     data.dataAvailabilityViolation
          ? content.push({ text: 'Naruszenie dostępności danych', style: BLOCK_STYLES.LIST })
          : null;
     // {{ 'uodos.descDataAvailabilityViolation' | translate }}
     data.dataAvailabilityViolation
          ? content.push({
                 text: 'Brak możliwości wykorzystania danych na żądanie, w założonym czasie, przez osobę do tego uprawnioną',
                 style: 'BLOCK_STYLES.DESCRIPTION',
            })
          : null;
     content.push(sectionItem('4F. Dzieci'));
     // content.push({
     //      text: '4F. Dzieci',
     //      style: BLOCK_STYLES.SECTION_ITEM,
     // });
     //"'uodos.section4FKids' | translate"
     const kidsIndidentText = data.section4FKids
          ? 'Naruszenie dotyczy przetwarzania danych..'
          : 'Naruszenie nie dotyczy przetwarzania danych..';
     content.push(sectionList(kidsIndidentText));
     // content.push({ text: kidsIndidentText, style: BLOCK_STYLES.LIST, });

     return content;
}
