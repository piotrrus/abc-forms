import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { sectionDescription, sectionHeader, sectionItem, sectionList } from './printing.util';

export function createSection4(data: DescriptionDTO): Content {
     const content: Content = [];
     // {{ 'uodos.section4' | translate }}
     content.push(sectionHeader('4. Charakter naruszenia'));

     content.push(sectionItem('4A. Opisz szczegółowo na czym polegało naruszenie'));

     data.descSection4a ? content.push(sectionList(data.descSection4a)) : null;

     content.push(sectionItem('4B. Na czym polegało naruszenie?'));

     // "'uodos.section4bcheckboxA' | translate" section4bcheckboxA

     data.section4bcheckboxA
          ? content.push(sectionList('a) Zgubienie lub kradzież nośnika/urządzenia'))
          : null;

     data.section4bcheckboxB
          ? content.push(
                 sectionList(
                      'b) Dokumentacja papierowa (zawierająca dane osobowe) zgubiona, skradziona lub pozostawiona w niezabezpieczonej lokalizacji'
                 )
            )
          : null;
     data.section4bcheckboxC
          ? content.push(
                 sectionList(
                      'c) Korespondencja papierowa utracona przez operatora pocztowego lub otwarta przed zwróceniem jej do nadawcy'
                 )
            )
          : null;
     data.section4bcheckboxD
          ? content.push(sectionList('d) Nieuprawnione uzyskanie dostępu do informacji'))
          : null;
     data.section4bcheckboxE
          ? content.push(
                 sectionList('e) Nieuprawnione uzyskanie dostępu do informacji poprzez złamanie zabezpieczeń')
            )
          : null;
     data.section4bcheckboxF
          ? content.push(
                 sectionList(
                      'f) Złośliwe oprogramowanie ingerujące w poufność, integralność lub dostępność danych'
                 )
            )
          : null;
     data.section4bcheckboxG
          ? content.push(
                 sectionList(
                      'g) Uzyskanie poufnych informacji przez pozornie zaufaną osobę w oficjalnej komunikacji elektronicznej, takiej jak e-mail czy komunikator internetowy (phishing)'
                 )
            )
          : null;
     data.section4bcheckboxH
          ? content.push(sectionList('h) Nieprawidłowa anonimizacja danych osobowych w dokumencie'))
          : null;
     data.section4bcheckboxI
          ? content.push(
                 sectionList(
                      'i) Nieprawidłowe usunięcie/zniszczenie danych osobowych z nośnika/urządzenia elektronicznego przed jego zbyciem przez administratora'
                 )
            )
          : null;
     data.section4bcheckboxJ ? content.push(sectionList('j) Niezamierzona publikacja')) : null;
     data.section4bcheckboxK
          ? content.push(sectionList('k) Dane osobowe wysłane do niewłaściwego odbiorcy'))
          : null;
     data.section4bcheckboxL ? content.push(sectionList('l) Ujawnienie danych niewłaściwej osoby')) : null;
     data.section4bcheckboxM ? content.push(sectionList('m) Ustne ujawnienie danych osobowych')) : null;

     content.push(sectionItem('4C. Działanie złoliwego oprogramowania'));

     content.push(
          sectionList(
               'a) Jeśli w ocenie administratora doszło wyłącznie do naruszenia dostępności danych, w jaki sposób stwierdzono, że nie doszło do naruszenia ich poufności?'
          )
     );

     data.descriptionSection4Ca ? content.push(sectionList(data.descriptionSection4Ca)) : null;

     content.push(
          sectionList(
               'b) Czy, a jeżeli tak, to w jakiej formie, złośliwe oprogramowanie poinformowało o konieczności uiszczenia opłaty w celu odzyskania dostępu do danych'
          )
     );
     data.descriptionSection4Cb ? content.push(sectionList(data.descriptionSection4Cb)) : null;

     content.push(
          sectionList(
               'c) Jeżeli doszło do utraty dostępności danych, to czy administrator był w posiadaniu kopii zapasowej, jeśli tak to w jakim czasie ją przywrócił?'
          )
     );
     data.descriptionSection4Cc ? content.push(sectionList(data.descriptionSection4Cc)) : null;

     content.push(sectionHeader('4D. Przyczyna naruszenia'));

     data.internalActionUnintentional
          ? content.push(sectionList('Wewnętrzne działanie niezamierzone'))
          : null;
     data.externalActionUnintentional
          ? content.push(sectionList('Zewnętrzne działanie niezamierzone'))
          : null;
     data.internalActionIntentional ? content.push(sectionList('Wewnętrzne działanie zamierzone')) : null;
     data.externalActionIntentional ? content.push(sectionList('Zewnętrzne działanie zamierzone')) : null;

     content.push(sectionHeader('4E. Charakter'));

     //"'uodos.breachOfDataConfidentiality' | translate"
     data.breachOfDataConfidentiality ? content.push(sectionList('Naruszenie poufności danych')) : null;
     // {{ 'uodos.descbreachOfDataConfidentiality' | translate }}
     data.breachOfDataConfidentiality
          ? content.push(sectionList('Nieuprawnione lub przypadkowe ujawnienie bądź udostępnienie danych'))
          : null;

     data.dataIntegrityBreach ? content.push(sectionList('Naruszenie integralności danych')) : null;
     //{{ 'uodos.descDataIntegrityBreach' | translate }}
     data.dataIntegrityBreach
          ? content.push(
                 sectionList(
                      'Wprowadzenie nieuprawnionych zmian podczas odczytu, zapisu, transmisji lub przechowywania'
                 )
            )
          : null;

     data.dataAvailabilityViolation ? content.push(sectionList('Naruszenie dostępności danych')) : null;
     // {{ 'uodos.descDataAvailabilityViolation' | translate }}
     data.dataAvailabilityViolation
          ? content.push(
                 sectionList(
                      'Brak możliwości wykorzystania danych na żądanie, w założonym czasie, przez osobę do tego uprawnioną'
                 )
            )
          : null;
     content.push(sectionItem('4F. Dzieci'));

     //"'uodos.section4FKids' | translate"
     const kidsIndidentText = data.section4FKids
          ? 'Naruszenie dotyczy przetwarzania danych..'
          : 'Naruszenie nie dotyczy przetwarzania danych..';
     content.push(sectionList(kidsIndidentText));

     return content;
}
