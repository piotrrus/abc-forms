import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { sectionDescription, sectionHeader, sectionList } from './printing.util';
import * as dayjs from 'dayjs';
import { DATE_FORMAT, DATE_TIME_FORMAT } from '../enums/date-time.formats.enum';

export function createSection10(data: DescriptionDTO): Content {
     const content: Content = [];
     // 'uodos.section10' | translate
     content.push(sectionHeader('10. Czy osoby, których dane dotyczą, zostały zawiadomione o naruszeniu?'));

     if (data.section10true || data.section10Notice) {
          content.push(sectionDescription('Czy indywidualnie?'));

          const isIndividualText = data.section10IndwidualTrue ? 'TAK' : 'NIE';
          content.push(sectionDescription(isIndividualText));

          content.push(sectionList('Wskaż datę zawiadomienia'));
          const notificationDate = dayjs(data.indicateTheDateNotification).format(DATE_TIME_FORMAT);
          const plannedDate = dayjs(data.indicateTheDateOfThePlannedNotification1).format(DATE_TIME_FORMAT);

          data.indicateTheDateNotification ? content.push(sectionList(notificationDate)) : null;

          content.push(sectionList('Wskaż datę planowanego zawiadomienia'));

          data.indicateTheDateOfThePlannedNotification1 ? content.push(sectionList(plannedDate)) : null;

          // content.push(sectionList('Liczba zawiadomionych osób'));
          data.numberOfPeopleNotified
               ? content.push(
                      sectionList(`Liczba zawiadomionych osób ${data.numberOfPeopleNotified.toString()}`)
                 )
               : null;

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

          //includeDheAnonymized
          // content.push(
          //      sectionList(
          //           'Umieść zanonimizowaną treść zawiadomienia, którą przesłałeś bądź zamierzasz przesłać do osób, których dane dotyczą.'
          //      )
          // );
          // content.push(
          //      sectionDescription(
          //           '• opisywać jasnym i prostym językiem charakter naruszenia ochrony danych osobowych,'
          //      )
          // );

          // content.push(
          //      sectionDescription(
          //           '• zawierać imię i nazwisko oraz dane kontaktowe inspektora ochrony danych lub oznaczenie innego punktu kontaktowego, od którego można uzyskać więcej informacji,'
          //      )
          // );
          // content.push(
          //      sectionDescription('• opisywać możliwe konsekwencje naruszenia ochrony danych osobowych,')
          // );
          // content.push(
          //      sectionDescription(
          //           '• opisywać środki zastosowane lub proponowane przez administratora w celu zaradzenia naruszeniu ochrony danych osobowych, w tym stosownych przypadkach środki w celu zminimalizowania jego ewentualnych negatywnych skutków.'
          //      )
          // );

          {
               // to treat a paragraph as a bulleted list, set an array of items under the ul key
               //  content.push({ ul: ['Item 1', 'Item 2', 'Item 3', { text: 'Item 4', bold: true }] });

               data.includeDheAnonymized ? content.push(sectionList(data.includeDheAnonymized)) : null;

               //      <h6 pageLayoutTitle>
               //      {{ 'uodos.includeDheAnonymized' | translate }}<br>
               //      {{ 'uodos.desIncludeDheAnonymized0' | translate }}<br>
               //      {{ 'uodos.desIncludeDheAnonymized1' | translate }}<br>
               //      {{ 'uodos.desIncludeDheAnonymized2' | translate }}<br>
               //      {{ 'uodos.desIncludeDheAnonymized3' | translate }}<br>
               //      {{ 'uodos.desIncludeDheAnonymized4' | translate }}
               //    </h6>
          }
     } else if (data.theyWillNotBeNotifiedBecause) {
          if (data.appropriateTechnicalMeasuresHaveBeenImplementedBeforeTheViolation) {
               // measuresWereTakenFollowingTheBreach
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

     //      <npc-circle-radio-option [label]="'uodos.section10true' | translate"
     //      [value]="INDVIDUAL"></npc-circle-radio-option>
     //    <npc-circle-radio-option [label]="'uodos.section10IndwidualFalse' | translate"
     //      [value]="SECTION10_INDWIDUAL_FALSE"></npc-circle-radio-option>
     //  </npc-circle-radio>
     // 3
     //      [label]="'uodos.appropriateTechnicalMeasuresHaveBeenImplementedBeforeTheViolation' | translate"
     //      [value]="APPROPRITE_TECHNICAL"></npc-circle-radio-option>
     //    <npc-circle-radio-option [label]="'uodos.measuresWereTakenFollowingTheBreach' | translate"
     //      [value]="MEASURE_WERE_TAKEN"></npc-circle-radio-option>
     //    <npc-circle-radio-option [label]="'uodos.noHighRiskWasFound' | translate"

     return content;
}

export function createSection10Individual(data: DescriptionDTO): Content {
     const content: Content = [];
     content.push(content.push(sectionDescription('')));

     content.push(content.push(sectionDescription('Czy indywidualnie?')));

     const isIndividualText = data.section10IndwidualTrue ? 'TAK' : 'NIE';
     content.push(content.push(sectionDescription(isIndividualText)));

     content.push(content.push(sectionList('Wskaż datę zawiadomienia')));

     const notificationDate = dayjs(data.indicateTheDateNotification).format('YYYY-MM-DD');
     const plannedDate = dayjs(data.indicateTheDateOfThePlannedNotification1).format('YYYY-MM-DD');

     data.indicateTheDateNotification ? content.push(sectionList(notificationDate)) : null;

     content.push(content.push(sectionList('Wskaż datę planowanego zawiadomienia')));
     data.indicateTheDateOfThePlannedNotification1 ? content.push(sectionList(plannedDate)) : null;
     //
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

     //      <h6 pageLayoutTitle>
     //      {{ 'uodos.includeDheAnonymized' | translate }}<br>
     //      {{ 'uodos.desIncludeDheAnonymized0' | translate }}<br>
     //      {{ 'uodos.desIncludeDheAnonymized1' | translate }}<br>
     //      {{ 'uodos.desIncludeDheAnonymized2' | translate }}<br>
     //      {{ 'uodos.desIncludeDheAnonymized3' | translate }}<br>
     //      {{ 'uodos.desIncludeDheAnonymized4' | translate }}
     //    </h6>
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
