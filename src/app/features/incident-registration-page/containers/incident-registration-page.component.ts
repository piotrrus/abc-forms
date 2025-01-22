import { Component } from '@angular/core';
import { FormFieldsDescriptionService } from '../services/form-fields-description.service';
import { CountriesService } from '../services/countries.service';
import { Observable } from 'rxjs';
import { List } from '../models/list.interface';
import { PersonCategoriesService } from '../services/person-categories.service';
import { IncidentImpactsService } from '../services/incident-impacts.service';
import { PossibleConsequencesService } from '../services/possible-consequences.service';
import { PersonalDataCategoriesService } from '../services/personal-data-categories.service';

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
          this.personalDataCategoriesService.getBasicCategorieList();
     public personalSpecialCategoriesList$: Observable<List[]> =
          this.personalDataCategoriesService.getSpecialCategorieList();
     public personalRodoCategoriesList$: Observable<List[]> =
          this.personalDataCategoriesService.getRodoCategorieList();

     public incidentKinds: any;
     public violationReasons: any;
     public transborderCountries: any;
     public incidentResults: any;
     public incidentImpact: any;
     public incidentReasons: any;
     public adminRepresentative: any;
     public adminData: any;
     public adminAddress: any;

     constructor(
          private readonly formFieldsDescriptionService: FormFieldsDescriptionService,
          private readonly countriesService: CountriesService,
          private readonly personCategoriesService: PersonCategoriesService,
          private readonly incidentImpactsService: IncidentImpactsService,
          private readonly possibleConsequencesService: PossibleConsequencesService,

          private readonly personalDataCategoriesService: PersonalDataCategoriesService
     ) {}

     public onAdminDataFormChange($event: any): void {
          this.adminData = $event;
          this.createIncidentModel();
     }
     public onAdminAddressFormChange($event: any): void {
          this.adminAddress = $event;
          this.createIncidentModel();
     }
     public onAdminRepresentativeFormChange($event: any): void {
          this.adminRepresentative = $event;
          this.createIncidentModel();
     }

     public onPossibleConsequencesData($event: any): void {
          console.log($event);
     }
     public onTransborderData($event: any): void {
          console.log($event);
     }
     public onPersonCategoriesData($event: any): void {
          console.log($event);
     }
     public onSecurityMeasuresData($event: any): void {
          console.log($event);
     }
     public onPersonalCategories($event: any): void {
          console.log($event);
     }
     public onNrOfPersonData($event: any): void {
          console.log($event);
     }

     private createIncidentModel(): void {
          const incident: any = {
               ...this.adminData,
               ...this.adminAddress,
               ...this.adminRepresentative,

               ...this.incidentKinds,
               ...this.violationReasons,
               ...this.transborderCountries,
               ...this.incidentResults,
               ...this.incidentImpact,
               ...this.incidentReasons,
          };
     }
}
