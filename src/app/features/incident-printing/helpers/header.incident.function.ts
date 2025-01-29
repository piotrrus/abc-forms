import { Content } from 'pdfmake/interfaces';
import { INCIDENT_LABELS } from '../enums/incident-titles.enum';

export function createHeaderSection(): Content {
     return [
          {
               text: INCIDENT_LABELS.MAIN_TITLE,
               style: 'header',
          },
     ];
}
