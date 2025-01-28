import { Content } from 'pdfmake/interfaces';
import { DescriptionDTO } from 'src/description-dto';
import { BLOCK_STYLES } from '../enums/block-styles.enum';
import { sectionDescription, sectionList } from './printing.util';

export function createSection10(data: DescriptionDTO): Content {
     const content: Content = [];
     // 'uodos.section10' | translate
     content.push({ text: '10. Czy osoby, których dane dotyczą, zostały zawiadomione o naruszeniu?', style: 'sectionHeader' });

     //indicateTheDateNotification indicateTheDateOfThePlannedNotification numberOfPeopleNotified 
     //meansOfCommunicationUsedToNotifyDataSubject iDoNotYetKnowDateWhenIntendToNotifyDataSubjects
     //includeDheAnonymized
     // 1,2 
     if (data.section10true || data.section10Notice) {
          content.push(content.push(sectionDescription('')));

          content.push(content.push(sectionDescription('Czy indywidualnie?')));

          const isIndividualText = data.section10IndwidualTrue ? 'TAK' : 'NIE';
          content.push(content.push(sectionDescription(isIndividualText)));

          content.push(content.push(sectionList('Wskaż datę zawiadomienia')));
          data.indicateTheDateNotification ? content.push(content.push(sectionList(data.indicateTheDateNotification.toString()))) : null;

          content.push(content.push(sectionList('Wskaż datę planowanego zawiadomienia')));
          data.indicateTheDateOfThePlannedNotification ? content.push(content.push(sectionList(data.indicateTheDateOfThePlannedNotification.toString()))) : null;
          //
          content.push(content.push(sectionList('Liczba zawiadomionych osób')));
          data.numberOfPeopleNotified ? content.push(content.push(sectionList(data.numberOfPeopleNotified.toString()))) : null;

          content.push(content.push(sectionList('Nie znam jeszcze daty kiedy zamierzam zawiadomić osoby, których dane dotyczą')));
          data.iDoNotYetKnowDateWhenIntendToNotifyDataSubjects ? content.push(content.push(sectionList(data.iDoNotYetKnowDateWhenIntendToNotifyDataSubjects.toString()))) : null;

          content.push(content.push(sectionList('Środki komunikacji wykorzystane do zawiadomienia osoby, której dane dotyczą')));
          data.meansOfCommunicationUsedToNotifyDataSubject ? content.push(content.push(sectionList(data.meansOfCommunicationUsedToNotifyDataSubject.toString()))) : null;

          //      <h6 pageLayoutTitle>
          //      {{ 'uodos.includeDheAnonymized' | translate }}<br>
          //      {{ 'uodos.desIncludeDheAnonymized0' | translate }}<br>
          //      {{ 'uodos.desIncludeDheAnonymized1' | translate }}<br>
          //      {{ 'uodos.desIncludeDheAnonymized2' | translate }}<br>
          //      {{ 'uodos.desIncludeDheAnonymized3' | translate }}<br>
          //      {{ 'uodos.desIncludeDheAnonymized4' | translate }}
          //    </h6>

     }
     else if (data.theyWillNotBeNotifiedBecause) {
          if (data.appropriateTechnicalMeasuresHaveBeenImplementedBeforeTheViolation) {
               // measuresWereTakenFollowingTheBreach
               content.push(content.push(sectionDescription('przed naruszeniem wdrożono odpowiednie techniczne i organizacyjne środki ochorny (wskazane w pkt.9A formularza) i środki te zostały zastosowane do danych osobowych, których dotyczy naruszenie, w szczególności środki takie jak szyfrowanie, anonimizacji  czy pseudonimizacji uniemożliwiające odczyt osobom nieuprawnionym do dostępu do tych danych osobowych.')));
          } else if (data.measuresWereTakenFollowingTheBreach) {
               content.push(content.push(sectionDescription('po naruszeniu zastosowano środki (wskazane w pkt.9C formularza) eleminujące prawdopodobieństwo wysokiego ryzyka naruszenia praw lub wolności osoby, której dotyczą.')));
          } else if (data.noHighRiskWasFound) {
               content.push(content.push(sectionDescription('stwierdzono brak wysokiego ryzyka naruszenia praw lub wolności osób fizycznych (uzasadnienie  pkt.8B formularza)')));
          }
     } else if (data.ihaventRatedItYet) {
          //'descIhaventRatedItYet' | translate
          content.push(content.push(sectionDescription('Jeśli jeszcze nie oceniłeś, czy zamierzasz zawiadomić osoby, których dane dotyczą, pamiętaj, że po podjęciu takiej decyzji będziesz musiał złożyć zgłoszenie uzupełniające.')));
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


     // data.section9c ? content.push({ text: data.section9c, style: BLOCK_STYLES.LIST, }) : null;

     return content;
}

export function createSection10Individual(data: DescriptionDTO): Content {
     const content: Content = [];
     content.push(content.push(sectionDescription('')));

     content.push(content.push(sectionDescription('Czy indywidualnie?')));

     const isIndividualText = data.section10IndwidualTrue ? 'TAK' : 'NIE';
     content.push(content.push(sectionDescription(isIndividualText)));

     content.push(content.push(sectionList('Wskaż datę zawiadomienia')));
     data.indicateTheDateNotification ? content.push(content.push(sectionList(data.indicateTheDateNotification.toString()))) : null;

     content.push(content.push(sectionList('Wskaż datę planowanego zawiadomienia')));
     data.indicateTheDateOfThePlannedNotification ? content.push(content.push(sectionList(data.indicateTheDateOfThePlannedNotification.toString()))) : null;
     //
     content.push(content.push(sectionList('Liczba zawiadomionych osób')));
     data.numberOfPeopleNotified ? content.push(content.push(sectionList(data.numberOfPeopleNotified.toString()))) : null;

     content.push(content.push(sectionList('Nie znam jeszcze daty kiedy zamierzam zawiadomić osoby, których dane dotyczą')));
     data.iDoNotYetKnowDateWhenIntendToNotifyDataSubjects ? content.push(content.push(sectionList(data.iDoNotYetKnowDateWhenIntendToNotifyDataSubjects.toString()))) : null;

     content.push(content.push(sectionList('Środki komunikacji wykorzystane do zawiadomienia osoby, której dane dotyczą')));
     data.meansOfCommunicationUsedToNotifyDataSubject ? content.push(content.push(sectionList(data.meansOfCommunicationUsedToNotifyDataSubject.toString()))) : null;

     //      <h6 pageLayoutTitle>
     //      {{ 'uodos.includeDheAnonymized' | translate }}<br>
     //      {{ 'uodos.desIncludeDheAnonymized0' | translate }}<br>
     //      {{ 'uodos.desIncludeDheAnonymized1' | translate }}<br>
     //      {{ 'uodos.desIncludeDheAnonymized2' | translate }}<br>
     //      {{ 'uodos.desIncludeDheAnonymized3' | translate }}<br>
     //      {{ 'uodos.desIncludeDheAnonymized4' | translate }}
     //    </h6>
     return content
}

export function createSection10WillNotNotified(data: DescriptionDTO): Content {
     const content: Content = [];
     if (data.appropriateTechnicalMeasuresHaveBeenImplementedBeforeTheViolation) {
          content.push(content.push(sectionDescription('przed naruszeniem wdrożono odpowiednie techniczne i organizacyjne środki ochorny (wskazane w pkt.9A formularza) i środki te zostały zastosowane do danych osobowych, których dotyczy naruszenie, w szczególności środki takie jak szyfrowanie, anonimizacji  czy pseudonimizacji uniemożliwiające odczyt osobom nieuprawnionym do dostępu do tych danych osobowych.')));
     } else if (data.measuresWereTakenFollowingTheBreach) {
          content.push(content.push(sectionDescription('po naruszeniu zastosowano środki (wskazane w pkt.9C formularza) eleminujące prawdopodobieństwo wysokiego ryzyka naruszenia praw lub wolności osoby, której dotyczą.')));
     } else if (data.noHighRiskWasFound) {
          content.push(content.push(sectionDescription('stwierdzono brak wysokiego ryzyka naruszenia praw lub wolności osób fizycznych (uzasadnienie  pkt.8B formularza)')));
     }
     return content
}
