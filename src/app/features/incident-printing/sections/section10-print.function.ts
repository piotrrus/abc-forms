import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { sectionDescription, sectionHeader, sectionList } from '../helpers/printing.util';
import * as dayjs from 'dayjs';
// import { DATE_FORMAT, DATE_TIME_FORMAT } from '../enums/date-time.formats.enum';
import { contentSectionHeader } from '../helpers/content-create.helper';
import { DATE_FORMAT, DATE_TIME_FORMAT } from '../enums/date-time.formats.enum';
// import { DateHandler } from 'src/shared/utils/data.handler';

export function createSection10(data: DescriptionDTO): Content {
     // 'uodos.section10' | translate
     const content: Content = [
          ...contentSectionHeader('10. Czy osoby, których dane dotyczą, zostały zawiadomione o naruszeniu?'),
     ];

     // content.push(sectionHeader('10. Czy osoby, których dane dotyczą, zostały zawiadomione o naruszeniu?'));

     if (data.section10true || data.section10Notice) {
          const isIndividualText = data.section10IndwidualTrue ? 'TAK' : 'NIE';

          //   const notificationDate = DateHandler.dateTimeFormat(data.indicateTheDateNotification?.toString());
          const notificationDate = dayjs(data.indicateTheDateNotification).format(DATE_TIME_FORMAT);
          //     const plannedDate = DateHandler.dateTimeFormat(data.indicateTheDateOfThePlannedNotification?.toString());
          const plannedDate = dayjs(data.indicateTheDateOfThePlannedNotification).format(DATE_TIME_FORMAT);

          content.push({
               layout: 'noBorders',
               table: {
                    headerRows: 0,
                    widths: ['*', '*'],
                    body: [
                         [
                              { text: 'Czy indywidualnie?', style: 'list' },
                              { text: isIndividualText, style: 'list' },
                         ],
                         [
                              { text: 'Wskaż datę zawiadomienia', style: 'list' },
                              { text: notificationDate, style: 'list' },
                         ],
                         [
                              { text: 'Wskaż datę planowanego zawiadomienia', style: 'list' },
                              { text: plannedDate, style: 'list' },
                         ],
                         [
                              { text: 'Liczba zawiadomionych osób', style: 'list' },
                              { text: data.numberOfPeopleNotified?.toString(), style: 'list' },
                         ],
                    ],
               },
          });

          content.push(
               sectionList('Nie znam jeszcze daty kiedy zamierzam zawiadomić osoby, których dane dotyczą')
          );
          data.iDoNotYetKnowDateWhenIntendToNotifyDataSubjects
               ? content.push(sectionList(data.iDoNotYetKnowDateWhenIntendToNotifyDataSubjects.toString()))
               : null;

          content.push(
               sectionList('Środki komunikacji wykorzystane do zawiadomienia osoby, której dane dotyczą')
          );

          data.meansOfCommunicationUsedToNotifyDataSubject
               ? content.push(sectionList(data.meansOfCommunicationUsedToNotifyDataSubject.toString()))
               : null;
          {
               data.includeDheAnonymized ? content.push(sectionList(data.includeDheAnonymized)) : null;
          }
     } else if (data.theyWillNotBeNotifiedBecause) {
          if (data.appropriateTechnicalMeasuresHaveBeenImplementedBeforeTheViolation) {
               content.push(
                    sectionDescription(
                         'przed naruszeniem wdrożono odpowiednie techniczne i organizacyjne środki ochorny (wskazane w pkt.9A formularza) i środki te zostały zastosowane do danych osobowych, których dotyczy naruszenie, w szczególności środki takie jak szyfrowanie, anonimizacji  czy pseudonimizacji uniemożliwiające odczyt osobom nieuprawnionym do dostępu do tych danych osobowych.'
                    )
               );
          } else if (data.measuresWereTakenFollowingTheBreach) {
               content.push(
                    sectionDescription(
                         'po naruszeniu zastosowano środki (wskazane w pkt.9C formularza) eleminujące prawdopodobieństwo wysokiego ryzyka naruszenia praw lub wolności osoby, której dotyczą.'
                    )
               );
          } else if (data.noHighRiskWasFound) {
               content.push(
                    sectionDescription(
                         'stwierdzono brak wysokiego ryzyka naruszenia praw lub wolności osób fizycznych (uzasadnienie  pkt.8B formularza)'
                    )
               );
          }
     } else if (data.ihaventRatedItYet) {
          //'descIhaventRatedItYet' | translate
          content.push(
               sectionDescription(
                    'Jeśli jeszcze nie oceniłeś, czy zamierzasz zawiadomić osoby, których dane dotyczą, pamiętaj, że po podjęciu takiej decyzji będziesz musiał złożyć zgłoszenie uzupełniające.'
               )
          );
     }
     return content;
}

export function createSection10Individual(data: DescriptionDTO): Content {
     const content: Content = [];
     content.push(content.push(sectionDescription('')));

     content.push(content.push(sectionDescription('Czy indywidualnie?')));

     const isIndividualText = data.section10IndwidualTrue ? 'TAK' : 'NIE';
     content.push(content.push(sectionDescription(isIndividualText)));

     content.push(content.push(sectionList('Wskaż datę zawiadomienia')));

     const notificationDate = dayjs(data.indicateTheDateNotification).format(DATE_FORMAT);
     const plannedDate = dayjs(data.indicateTheDateOfThePlannedNotification).format(DATE_FORMAT);

     //   const notificationDate = DateHandler.dateTimeFormat(data.indicateTheDateNotification?.toString());
     //  const notificationDate =dayjs(data.indicateTheDateNotification).format(DATE_TIME_FORMAT);
     // const plannedDate = DateHandler.dateTimeFormat(data.indicateTheDateOfThePlannedNotification?.toString());

     data.indicateTheDateNotification ? content.push(sectionList(notificationDate)) : null;

     content.push(content.push(sectionList('Wskaż datę planowanego zawiadomienia')));
     data.indicateTheDateOfThePlannedNotification ? content.push(sectionList(plannedDate)) : null;

     content.push(content.push(sectionList('Liczba zawiadomionych osób')));
     data.numberOfPeopleNotified ? content.push(sectionList(data.numberOfPeopleNotified.toString())) : null;

     content.push(
          content.push(
               sectionList('Nie znam jeszcze daty kiedy zamierzam zawiadomić osoby, których dane dotyczą')
          )
     );
     data.iDoNotYetKnowDateWhenIntendToNotifyDataSubjects
          ? content.push(sectionList(data.iDoNotYetKnowDateWhenIntendToNotifyDataSubjects.toString()))
          : null;

     content.push(sectionList('Środki komunikacji wykorzystane do zawiadomienia osoby, której dane dotyczą'));
     data.meansOfCommunicationUsedToNotifyDataSubject
          ? content.push(sectionList(data.meansOfCommunicationUsedToNotifyDataSubject.toString()))
          : null;
     return content;
}

export function createSection10WillNotNotified(data: DescriptionDTO): Content {
     const content: Content = [];
     if (data.appropriateTechnicalMeasuresHaveBeenImplementedBeforeTheViolation) {
          content.push(
               sectionDescription(
                    'przed naruszeniem wdrożono odpowiednie techniczne i organizacyjne środki ochorny (wskazane w pkt.9A formularza) i środki te zostały zastosowane do danych osobowych, których dotyczy naruszenie, w szczególności środki takie jak szyfrowanie, anonimizacji  czy pseudonimizacji uniemożliwiające odczyt osobom nieuprawnionym do dostępu do tych danych osobowych.'
               )
          );
     } else if (data.measuresWereTakenFollowingTheBreach) {
          content.push(
               sectionDescription(
                    'po naruszeniu zastosowano środki (wskazane w pkt.9C formularza) eleminujące prawdopodobieństwo wysokiego ryzyka naruszenia praw lub wolności osoby, której dotyczą.'
               )
          );
     } else if (data.noHighRiskWasFound) {
          content.push(
               sectionDescription(
                    'stwierdzono brak wysokiego ryzyka naruszenia praw lub wolności osób fizycznych (uzasadnienie  pkt.8B formularza)'
               )
          );
     }
     return content;
}
