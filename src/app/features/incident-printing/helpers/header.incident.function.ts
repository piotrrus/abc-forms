import { Content } from 'pdfmake/interfaces';
import { INCIDENT_TITLES } from '../../enums/incident-titles.enum';

export function createHeaderSection(): Content {
     return [
          {
               text: INCIDENT_TITLES.MAIN_TITLE,
               style: 'header',
          },
     ];
}
