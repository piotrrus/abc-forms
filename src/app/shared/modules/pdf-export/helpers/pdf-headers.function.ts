import { Content } from 'pdfmake/interfaces';
import { INCIDENT_LABELS } from '../../../../features/incident-registration-page/enums/incident-titles.enum';

export function createHeaderSection(): Content {
     return [
          {
               text: INCIDENT_LABELS.MAIN_TITLE,
               style: 'header',
          },
     ];
}

export function createListHeaderSection(): Content {
     return [
          {
               text: INCIDENT_LABELS.LIST_TITLE,
               style: 'header',
          },
     ];
}
