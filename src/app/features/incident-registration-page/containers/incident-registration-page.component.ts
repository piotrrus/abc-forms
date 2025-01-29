import { Component } from '@angular/core';
import { FormFieldsDescriptionService } from '../services/form-fields-description.service';
import { CountriesService } from '../services/countries.service';
import { Observable, tap } from 'rxjs';
import { List } from '../models/list.interface';
import { PersonCategoriesService } from '../services/person-categories.service';
import { IncidentImpactsService } from '../services/incident-impacts.service';
import { PossibleConsequencesService } from '../services/possible-consequences.service';
import { PersonalCategoriesService } from '../services/personal-categories.service';
import { Section11 } from '../models/countries.interface';
import { IncidentsService } from '../services/incident.service';
import { IncidentPrintHelper } from '@features/incident-printing/helpers/incident-print.helper';

@Component({
     selector: 'app-incident-registration-page',
     templateUrl: './incident-registration-page.component.html',
     styleUrls: ['./incident-registration-page.component.scss'],
})
export class IncidentRegistrationPageComponent {
     public countriesList$: Observable<List[]> = this.countriesService.getCountriesList();
     public personCategoriesList$: Observable<List[]> = this.personCategoriesService.getPersonCategorieList();
     public possibleConsequencesList$: Observable<List[]> = this.possibleConsequencesService.getImpactList();

     public personalBasicCategoriesList$: Observable<List[]> =
          this.personalCategoriesService.getBasicCategorieList();
     public personalSpecialCategoriesList$: Observable<List[]> =
          this.personalCategoriesService.getSpecialCategorieList();
     public personalRodoCategoriesList$: Observable<List[]> =
          this.personalCategoriesService.getRodoCategorieList();

     public incidentKinds: any;
     public violationReasons: any;
     // public transborderCountries: any;
     public incidentResults: any;
     public incidentImpact: any;
     public incidentReasons: any;

     public adminRepresentative: any;
     public adminData: any;
     public adminAddress: any;

     public section1Data: any;
     public section2Data: any;
     public section3Data: any;
     public section4Data: any;
     public section5Data: any;
     public section6Data: any;
     public section7Data: any;
     public section8Data: any;
     public section9Data: any;
     public section10Data: any;
     public section11Data = <Section11>{};

     private incidentData: any;

     constructor(
          private readonly formFieldsDescriptionService: FormFieldsDescriptionService,
          private readonly countriesService: CountriesService,
          private readonly personCategoriesService: PersonCategoriesService,
          private readonly incidentImpactsService: IncidentImpactsService,
          private readonly possibleConsequencesService: PossibleConsequencesService,
          private readonly personalCategoriesService: PersonalCategoriesService,
          private readonly incidentsService: IncidentsService,
          private readonly incidentPrintHelper: IncidentPrintHelper
          //
     ) {
          this.getIncidentData();
     }

     // public onAdminDataFormChange($event: any): void {
     //      this.adminData = $event;
     //      this.createIncidentModel();
     // }
     // public onAdminAddressFormChange($event: any): void {
     //      this.adminAddress = $event;
     //      this.createIncidentModel();
     // }
     // public onAdminRepresentativeFormChange($event: any): void {
     //      this.adminRepresentative = $event;
     //      this.createIncidentModel();
     // }

     public onPossibleConsequencesData($event: any): void {
          // console.log($event);
          // this.adminRepresentative = $event;
          this.createIncidentModel();
     }
     public onTransborderData($event: Section11): void {
          console.log($event);
          this.section11Data = $event;

          this.createIncidentModel();
     }
     public onPersonCategoriesData($event: any): void {
          // console.log($event);
     }
     public onSecurityMeasuresData($event: any): void {
          // console.log($event);
     }
     public onPersonalCategories($event: any): void {
          // console.log($event);
     }
     public onNrOfPersonData($event: any): void {
          // console.log($event);
     }
     public onSection4FormChange($event: any): void {
          // console.log($event);
     }

     private createIncidentModel(): void {
          const incident: any = {
               ...this.adminData,
               ...this.adminAddress,
               ...this.adminRepresentative,

               ...this.incidentKinds,
               ...this.violationReasons,
               // ...this.transborderCountries,
               ...this.incidentResults,
               ...this.incidentImpact,
               ...this.incidentReasons,

               ...this.section11Data,
          };
          console.log(incident);
     }

     private getIncidentData(): void {
          this.incidentsService
               .getIncident()
               .pipe(
                    tap((data) => {
                         console.log(data);
                         this.incidentData = data;
                    })
               )
               .subscribe();
     }
     public pdfExport(): void {
          this.incidentPrintHelper.generatePdf(this.incidentData);
     }
}
