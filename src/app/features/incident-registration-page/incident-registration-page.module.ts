import { NgModule } from '@angular/core';
import { IncidentRegistrationPageComponent } from './containers/incident-registration-page.component';
import { SharedModule } from '@shared/modules/shared.modules';
import { IncidentRegistrationPageRoutingModule } from './incident-registration-page-routing.module';
import { ViolationReasonsFormComponent } from '@features/incident-registration-page/components/forms/violation-reasons-form/violation-reasons-form.component';
import { AdminRepresentativeFormComponent } from '@features/incident-registration-page/components/forms/admin-representative-form/admin-representative-form.component';
import { AdminDataFormComponent } from '@features/incident-registration-page/components/forms/admin-data-form/admin-data-form.component';
import { CountriesService } from './services/countries.service';
import { FormFieldsDescriptionService } from './services/form-fields-description.service';
// import { IncidentImpactFormComponent } from './components/forms/incident-reasons/incident-impact-form.component';
// import { IncidentReasonsFormComponent } from './components/forms/incident-impact/incident-reasons-form.component';
import { TransBorderFormComponent } from './components/forms/transborder/transborder-form.component';
import { AdminAddressFormComponent } from './components/forms/admin-address-form/admin-address-form.component';
import { DataSecurityInspectorFormComponent } from './components/forms/data-security-inspector-form/data-security-inspector-form.component';
import { IncidentKindsFormComponent } from './components/forms/incident-kinds-form/incident-kinds-form.component';
import { PersonalDataCategoriesFormComponent } from './components/forms/personal-data-categories-form/personal-data-categories-form.component';
import { PersonCategoriesFormComponent } from './components/forms/person-categories-form/person-categories-form.component';
import { PersonCategoriesService } from './services/person-categories.service';
import { IncidentImpactComponent } from './components/forms/incident-impact/incident-impact.component';
import { IncidentImpactsService } from './services/incident-impacts.service';
import { IncidentReasonsFormComponent } from './components/forms/incident-reasons/incident-reasons-form.component';
import { PossibleConsequencesFormComponent } from './components/forms/possible-consequences-form/possible-consequences-form.component';
import { PossibleConsequencesService } from './services/possible-consequences.service';
import { SecurityMeasuresFormComponent } from './components/forms/security-measures-form/security-measures-form.component';
import { PersonalCategoriesService } from './services/personal-categories.service';
import { NumberOfPersonsComponent } from './components/forms/number-of-persons/number-of-persons.component';
import { ViolationTimeFormComponent } from './components/forms/violation-time-form/violation-time-form.component';
import { ViolationDetectionFormComponent } from './components/forms/violation-detection-form/violation-detection-form.component';
import { Section2Component } from './components/sections/section2/section2.component';
import { Section4Component } from './components/sections/section4/section4.component';
import { Section1Component } from './components/sections/section1/section1.component';
import { Section6Component } from './components/sections/section6/section6.component';
import { Section3Component } from './components/sections/section3/section3.component';
import { IncidentsService } from './services/incident.service';
import { IncidentPrintModule } from './incident-print.module';
import { UodoInfoComponent } from './components/uodo-info/uodo-info.component';

const COMPONENTS = [
     ViolationReasonsFormComponent,
     AdminRepresentativeFormComponent,
     AdminDataFormComponent,
     AdminAddressFormComponent,
     IncidentImpactComponent,
     IncidentReasonsFormComponent,
     TransBorderFormComponent,
     DataSecurityInspectorFormComponent,
     IncidentKindsFormComponent,
     PersonalDataCategoriesFormComponent,
     PersonCategoriesFormComponent,
     IncidentImpactComponent,
     PossibleConsequencesFormComponent,
     SecurityMeasuresFormComponent,
     NumberOfPersonsComponent,
     ViolationTimeFormComponent,
     ViolationDetectionFormComponent,
     Section1Component,
     Section2Component,
     Section4Component,
     UodoInfoComponent,
];
@NgModule({
     declarations: [COMPONENTS, IncidentRegistrationPageComponent, Section6Component, Section3Component],
     imports: [SharedModule, IncidentRegistrationPageRoutingModule, IncidentPrintModule],
     providers: [
          CountriesService,
          FormFieldsDescriptionService,
          PersonCategoriesService,
          IncidentImpactsService,
          PossibleConsequencesService,
          PersonalCategoriesService,
          IncidentsService,
     ],
})
export class IncidentRegistrationPageModule {}
