import { NgModule } from '@angular/core';
import { IncidentRegistrationPageComponent } from './containers/incident-registration-page.component';
import { SharedModule } from 'src/shared/modules/shared.modules';
import { IncidentRegistrationPageRoutingModule } from './incident-registration-page-routing.module';
import { ViolationReasonsFormComponent } from '@features/incident-registration-page/components/forms/violation-reasons-form/violation-reasons-form.component';
import { AdminRepresentativeFormComponent } from '@features/incident-registration-page/components/forms/admin-representative-form/admin-representative-form.component';
import { AdminDataFormComponent } from '@features/incident-registration-page/components/forms/admin-data-form/admin-data-form.component';
import { CountriesService } from './services/countries.service';
import { FormFieldsDescriptionService } from './services/form-fields-description.service';
import { IncidentImpactFormComponent } from './components/forms/incident-reasons/incident-impact-form.component';
import { IncidentReasonsFormComponent } from './components/forms/incident-impact/incident-reasons-form.component';
import { TransBorderFormComponent } from './components/forms/transborder/transborder-form.component';
import { AdminAddressFormComponent } from './components/forms/admin-address-form/admin-address-form.component';
import { DataSecurityInspectorFormComponent } from './components/forms/data-security-inspector-form/data-security-inspector-form.component';
import { IncidentKindsFormComponent } from './components/forms/incident-kinds-form/incident-kinds-form.component';
import { PersonalDataCategoriesFormComponent } from './components/forms/personal-data-categories-form/personal-data-categories-form.component';
import { PersonCategoriesFormComponent } from './components/forms/person-categories-form/person-categories-form.component';

const COMPONENTS = [
     ViolationReasonsFormComponent,
     AdminRepresentativeFormComponent,
     AdminDataFormComponent,
     AdminAddressFormComponent,
     IncidentImpactFormComponent,
     IncidentReasonsFormComponent,
     TransBorderFormComponent,
];
@NgModule({
     declarations: [COMPONENTS, IncidentRegistrationPageComponent, DataSecurityInspectorFormComponent, IncidentKindsFormComponent, PersonalDataCategoriesFormComponent, PersonCategoriesFormComponent],
     imports: [SharedModule, IncidentRegistrationPageRoutingModule],
     providers: [CountriesService, FormFieldsDescriptionService],
})
export class IncidentRegistrationPageModule {}
