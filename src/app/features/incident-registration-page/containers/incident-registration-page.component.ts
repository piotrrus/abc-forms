import { Component } from '@angular/core';
import { FormFieldsDescriptionService } from '../services/form-fields-description.service';
import { CountriesService } from '../services/countries.service';
import { Observable } from 'rxjs';
import { List } from '../models/list.interface';

@Component({
     selector: 'app-incident-registration-page',
     templateUrl: './incident-registration-page.component.html',
     styleUrls: ['./incident-registration-page.component.scss'],
})
export class IncidentRegistrationPageComponent {
     public countriesList$: Observable<List[]> = this.countriesService.getCountriesList();

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
          private readonly countriesService: CountriesService
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
