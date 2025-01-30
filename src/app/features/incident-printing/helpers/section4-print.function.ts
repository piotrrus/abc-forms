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
     const formLabels4b: string[] = [];

     data.section4bcheckboxA ? formLabels4b.push('a) Zgubienie lub kradzież nośnika/urządzenia'): null;
     data.section4bcheckboxB ? formLabels4b.push('b) Dokumentacja papierowa (zawierająca dane osobowe) zgubiona, skradziona lub pozostawiona w niezabezpieczonej lokalizacji'): null;
     data.section4bcheckboxC ? formLabels4b.push('c) Korespondencja papierowa utracona przez operatora pocztowego lub otwarta przed zwróceniem jej do nadawcy'): null;
     data.section4bcheckboxD ? formLabels4b.push('d) Nieuprawnione uzyskanie dostępu do informacji'): null;
     data.section4bcheckboxE ? formLabels4b.push('e) Nieuprawnione uzyskanie dostępu do informacji poprzez złamanie zabezpieczeń'): null;
     data.section4bcheckboxF ? formLabels4b.push('f) Złośliwe oprogramowanie ingerujące w poufność, integralność lub dostępność danych'): null;
     data.section4bcheckboxG ? formLabels4b.push('g) Uzyskanie poufnych informacji przez pozornie zaufaną osobę w oficjalnej komunikacji elektronicznej, takiej jak e-mail czy komunikator internetowy (phishing)'): null;
     data.section4bcheckboxH ? formLabels4b.push('h) Nieprawidłowa anonimizacja danych osobowych w dokumencie'): null;
     data.section4bcheckboxI ? formLabels4b.push('i) Nieprawidłowe usunięcie/zniszczenie danych osobowych z nośnika/urządzenia elektronicznego przed jego zbyciem przez administratora'): null;
     data.section4bcheckboxJ ? formLabels4b.push('j) Niezamierzona publikacja'): null;
     data.section4bcheckboxK ? formLabels4b.push('k) Dane osobowe wysłane do niewłaściwego odbiorcy'): null;
     data.section4bcheckboxL ? formLabels4b.push('l) Ujawnienie danych niewłaściwej osoby'): null;
     data.section4bcheckboxM ? formLabels4b.push('m) Ustne ujawnienie danych osobowych'): null;

     formLabels4b.forEach((label) => {
          content.push(sectionList(label));
     });

     // "'uodos.section4bcheckboxC' | translate" section4bcheckboxC

     content.push(sectionItem('4C. Działanie złoliwego oprogramowania'));

     const formLabels4c: string[] = [];

     formLabels4c.push('a) Jeśli w ocenie administratora doszło wyłącznie do naruszenia dostępności danych, w jaki sposób stwierdzono, że nie doszło do naruszenia ich poufności?');
     data.descriptionSection4Ca ? formLabels4c.push(data.descriptionSection4Ca) : null;
     formLabels4c.push('b) Czy, a jeżeli tak, to w jakiej formie, złośliwe oprogramowanie poinformowało o konieczności uiszczenia opłaty w celu odzyskania dostępu do danych');
     data.descriptionSection4Cb ? formLabels4c.push(data.descriptionSection4Cb) : null;
     formLabels4c.push('c) Jeżeli doszło do utraty dostępności danych, to czy administrator był w posiadaniu kopii zapasowej, jeśli tak to w jakim czasie ją przywrócił?');
     data.descriptionSection4Cc ? formLabels4c.push(data.descriptionSection4Cc) : null;

     formLabels4c.forEach((label) => {
          content.push(sectionList(label));
     });

     content.push(sectionItem('4D. Przyczyna naruszenia'));
     const formLabels4d: string[] = [];

     data.internalActionUnintentional ? formLabels4d.push('Wewnętrzne działanie niezamierzone') : null;
     data.externalActionUnintentional ? formLabels4d.push('Zewnętrzne działanie niezamierzone') : null;
     data.internalActionIntentional ? formLabels4d.push('Wewnętrzne działanie zamierzone') : null;
     data.externalActionIntentional ? formLabels4d.push('Zewnętrzne działanie zamierzone') : null;

     formLabels4d.forEach((label) => {
          content.push(sectionList(label));
     });

     content.push(sectionItem('4E. Charakter'));

     data.breachOfDataConfidentiality? content.push(sectionList('Naruszenie poufności danych')) : null;
     data.breachOfDataConfidentiality? content.push(sectionDescription('Nieuprawnione lub przypadkowe ujawnienie bądź udostępnienie danych')) : null;
     data.dataIntegrityBreach? content.push(sectionList('Naruszenie integralności danych')) : null;
     data.dataIntegrityBreach? content.push(sectionDescription('Wprowadzenie nieuprawnionych zmian podczas odczytu, zapisu, transmisji lub przechowywania')) : null;
     data.dataAvailabilityViolation? content.push(sectionList('Naruszenie dostępności danych')) : null;
     data.dataAvailabilityViolation? content.push(sectionDescription('Brak możliwości wykorzystania danych na żądanie, w założonym czasie, przez osobę do tego uprawnioną')) : null;
   
     //"'uodos.section4FKids' | translate"
     content.push(sectionItem('4F. Dzieci'));

     const kidsIndidentText = data.section4FKids
          ? 'Naruszenie dotyczy przetwarzania danych..'
          : 'Naruszenie nie dotyczy dotyczy przetwarzania danych..';

     content.push(sectionList(kidsIndidentText));

     return content;
}
