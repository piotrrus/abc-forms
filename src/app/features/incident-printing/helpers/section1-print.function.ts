import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';

export function createSection1(data: DescriptionDTO): Content {
     const content: Content = [];

     content.push({ text: '1. Typ zgloszenia', style: 'sectionHeader' });
     content.push({
          text: 'Wskaż czy zgłaszasz naruszenie ochrony danych osobowych mające charakter jednorazowego zdarzenia (np. zgubienie, kradzież nośnika danych, przypadkowe wysłanie danych osobie nieuprawnionej), czy przygotowujesz wstępne zgłoszenie, które uzupełnisz później, lub czy uzupełniasz lub zmieniasz wcześniejsze zgłoszenie',
          style: 'description',
     });

     // content.push({
     //      layout: 'noBorders', // optional
     //      table: {
     //           headerRows: 1,
     //           widths: [200, 200, '*'],

     //           body: [
     //                ['', '', ''],
     //                ['Value 1', 'Value 2', 'Value 3'],
     //                [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3'],
     //           ],
     //      },
     // });

     // {
     //      "addSignatureRegistration": "ABC-122345",
     //      "label": "Podaj numer/sygnaturę zgłoszenia do innego organu"
     // },

     // data.addSignatureRegistration
     //      ? content.push({
     //             text: `Przybliżona liczba osób, których dotyczy naruszenie ${data.approximateNumberOfPeopleBreached}`,
     //             style: 'list',
     //        })
     //      : null;

     // content.push({
     //      text: '2A. Dane administratora danych',
     //      style: 'sectionItem',
     // });
     // content.push({
     //      text: '2B. Adres siedziby administratora danych',
     //      style: 'sectionItem',
     // });
     // content.push({
     //      text: '2C. Osoby uprawnione do reprezentowania administratora',
     //      style: 'sectionItem',
     // });
     // content.push({
     //      text: '2D. Pełnomocik',
     //      style: 'sectionItem',
     // });
     // content.push({
     //      text: '2E. Inspektor ochrony danych',
     //      style: 'sectionItem',
     // });
     // content.push({
     //      text: '2F. Inne podmioty uczestniczące',
     //      style: 'sectionItem',
     // });

     // data.approximateNumberOfPeopleBreachedEntry
     //      ? content.push({
     //             text: `Przybliżona liczba wpisów danych osobowych, których dotyczy naruszenie ${data.approximateNumberOfPeopleBreachedEntry}`,
     //             style: 'list',
     //        })
     //      : null;

     return content;
}
