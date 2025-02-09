import { Component } from '@angular/core';
import { FormFieldsDescriptionService } from '../services/form-fields-description.service';
import { CountriesService } from '../services/countries.service';
import { Observable, tap } from 'rxjs';
import { List } from '../models/list.interface';
import { PersonCategoriesService } from '../services/person-categories.service';
import { IncidentImpactsService } from '../services/incident-impacts.service';
import { PossibleConsequencesService } from '../services/possible-consequences.service';
import { PersonalCategoriesService } from '../services/personal-categories.service';
import { Section11 } from '../models/sections.interface';
import { IncidentsService } from '../services/incident.service';
import { IncidentPrintHelper } from '@features/incident-registration-page/helpers/incident-print.helper';
import { IncidentsListPrintHelper } from '@features/incident-registration-page/helpers/incidents-list-print.helper';
import { Incident } from '@features/incidents-list-page/models/incident-list.interface';
import { DescriptionDTO } from 'src/description-dto';

@Component({
     selector: 'app-incident-registration-page',
     templateUrl: './incident-registration-page.component.html',
     styleUrls: ['./incident-registration-page.component.scss'],
})
export class IncidentRegistrationPageComponent {
     public countriesList$: Observable<List[]> = this.countriesService.getCountries();
     public personCategoriesList$: Observable<List[]> = this.personCategoriesService.getPersonCategories();
     public possibleConsequencesList$: Observable<List[]> =
          this.possibleConsequencesService.getConsequences();

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
     private incidentsList: Incident[];

     constructor(
          private readonly formFieldsDescriptionService: FormFieldsDescriptionService,
          private readonly countriesService: CountriesService,
          private readonly personCategoriesService: PersonCategoriesService,
          private readonly incidentImpactsService: IncidentImpactsService,
          private readonly possibleConsequencesService: PossibleConsequencesService,
          private readonly personalCategoriesService: PersonalCategoriesService,
          private readonly incidentsService: IncidentsService,
          private readonly incidentPrintHelper: IncidentPrintHelper,

          private readonly incidentListHelper: IncidentsListPrintHelper

          //
     ) {
          this.getIncidentData();
          this.getIncidentsList();
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

     //
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
          //    incident.addDateReopen = data.addDateReopen ? data.addDateReopen : '';

          incident.personalDataCategories = this.getPersonalDataViolation(data).toString();
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

     private getPersonalDataViolation(data: DescriptionDTO): string[] {
          const personalDataViolation: string[] = [];

          data.surnamesAndNames ? personalDataViolation.push('Nazwiska i imiona') : null;
          data.namesParents ? personalDataViolation.push('Imiona rodziców') : null;
          data.birthData ? personalDataViolation.push('Data urodzenia') : null;
          data.numberaAccountBank ? personalDataViolation.push('Numer rachunku bankowego') : null;
          data.adressliving ? personalDataViolation.push('Adres zamieszkania lub pobytu') : null;
          data.pesel ? personalDataViolation.push('Numer ewidencyjny PESEL') : null;
          data.addressMail ? personalDataViolation.push('Adres e-mail') : null;
          data.loginPassword ? personalDataViolation.push('Nazwa użytkownika i/lub hasło') : null;
          data.dataFromMoney
               ? personalDataViolation.push('Dane dotyczące zarobków i/lub posiadanego majątku')
               : null;
          data.serialNumberPersonallDocument
               ? personalDataViolation.push('Seria i numer dowodu osobistego')
               : null;
          data.phoneNumer ? personalDataViolation.push('Numer telefonu') : null;
          data.imagePerson ? personalDataViolation.push('Wizerunek') : null;
          // data.otherdesc ? personalDataViolation.push(data.otherdesc?.toString()) : null;
          console.log(personalDataViolation);
          return personalDataViolation;
     }

     public pdfExport(): void {
          this.incidentPrintHelper.generatePdf(this.incidentData);
     }
     //this.incidentsList
     public pdfExportList(): void {
          this.incidentListHelper.generateListPdf();
     }
}
