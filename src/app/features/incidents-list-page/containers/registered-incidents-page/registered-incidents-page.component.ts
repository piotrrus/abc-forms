import { Component } from '@angular/core';
import { IncidentsListPrintHelper } from '@features/incident-registration-page/helpers/incidents-list-print.helper';
import { getPersonalDataViolation } from '@features/incident-registration-page/helpers/personal-data-violation.function';
import { IncidentsService } from '@features/incident-registration-page/services/incident.service';
import { Incident } from '@features/incidents-list-page/models/incident-list.interface';
import { tap } from 'rxjs';
import { DescriptionDTO } from 'src/description-dto';

@Component({
     selector: 'app-registered-incidents-page',
     templateUrl: './registered-incidents-page.component.html',
     styleUrls: ['./registered-incidents-page.component.scss'],
})
export class RegisteredIncidentsPageComponent {
     constructor(
          private readonly incidentsService: IncidentsService,
          private readonly incidentListHelper: IncidentsListPrintHelper
     ) {
          this.getIncidentsList();
     }

     private getIncidentsList(): void {
          this.incidentsService
               .getIncidentList()
               .pipe(
                    tap((data) => {
                         console.log(data);
                         this.mapIncidentList(data[0]);
                         //   this.incidentsList = data;
                    })
               )
               .subscribe();
     }

     private mapIncidentList(data: DescriptionDTO): Incident {
          const incident: Incident = <Incident>{};
          incident.title = data.optionalSign ? data.optionalSign : '';
          incident.registrationType = this.getRegistrationType(data);

          incident.fullNameAdmin = data.fullNameAdmin ? data.fullNameAdmin : '';
          incident.regon = data.regon ? data.regon : '';
          //  incident.addDateOld = data.addDateOld ? data.addDateOld : '';
          //  incident.addDateReopen = data.addDateReopen ? data.addDateReopen : '';

          incident.personalDataCategories = getPersonalDataViolation(data).toString();
          incident.dataAboutGuiltyverdicts = data.dataAboutGuiltyverdicts ? 'TAK' : 'NIE';
          incident.noHighRiskWasFound = data.noHighRiskWasFound ? 'TAK' : 'NIE';
          incident.theBreachIsCrossBorderInNature = data.theBreachIsCrossBorderInNature ? 'TAK' : 'NIE';
          return incident;
     }

     private getRegistrationType(data: DescriptionDTO): string {
          let registrationType = 'Zgłoszenie wstępne';
          if (data.registrationComplet) {
               registrationType = 'Zgłoszenie kompletne/jednorazowe';
          } else if (data.registrationBegin) {
               registrationType = 'Zgłoszenie wstępne';
          } else if (data.registrationCompletModify) {
               registrationType = 'Zgłoszenie uzupełniające/zmieniające';
          }
          return registrationType;
     }

     public pdfExportList(): void {
          this.incidentListHelper.generateListPdf();
     }
}
