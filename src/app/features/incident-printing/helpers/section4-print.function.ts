import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';

export function createSection4(data: DescriptionDTO): Content {
     const content: Content = [];

     content.push({
          text: '4C. Działanie złoliwego oprogramowania',
          style: 'sectionItem',
     });

     content.push({
          text: 'a) Jeśli w ocenie administratora doszło wyłącznie do naruszenia dostępności danych, w jaki sposób stwierdzono, że nie doszło do naruszenia ich poufności?',
          style: 'list',
     });

     data.descriptionSection4Ca ? content.push({ text: data.descriptionSection4Ca, style: 'list' }) : null;

     content.push({
          text: 'b) Czy, a jeżeli tak, to w jakiej formie, złośliwe oprogramowanie poinformowało o konieczności uiszczenia opłaty w celu odzyskania dostępu do danych',
          style: 'list',
     });

     data.descriptionSection4Cb ? content.push({ text: data.descriptionSection4Cb, style: 'list' }) : null;
     content.push({
          text: 'c) Jeżeli doszło do utraty dostępności danych, to czy administrator był w posiadaniu kopii zapasowej, jeśli tak to w jakim czasie ją przywrócił?',
          style: 'list',
     });
     data.descriptionSection4Cc ? content.push({ text: data.descriptionSection4Cc, style: 'list' }) : null;

     content.push({
          text: '4D. Przyczyna naruszenia',
          style: 'sectionHeader',
     });

     data.internalActionUnintentional
          ? content.push({ text: 'Wewnętrzne działanie niezamierzone', style: 'list' })
          : null;

     content.push({
          text: '4E. Character',
          style: 'sectionItem',
     });

     data.internalActionUnintentional
          ? content.push({ text: 'Wewnętrzne działanie niezamierzone', style: 'list' })
          : null;
     data.dataIntegrityBreach
          ? content.push({ text: 'Naruszenie integralności danych', style: 'list' })
          : null;

     content.push({
          text: '4F. Dzieci',
          style: 'sectionItem',
     });

     const kidsIndidentText = data.section4FKids
          ? 'Naruszenie dotyczy przetwarzania danych..'
          : 'Naruszenie nie dotyczy dotyczy przetwarzania danych..';

     content.push({ text: kidsIndidentText, style: 'list' });

     return content;
}
