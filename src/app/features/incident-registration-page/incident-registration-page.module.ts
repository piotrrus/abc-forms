import { NgModule } from '@angular/core';
import { IncidentRegistrationPageComponent } from './containers/incident-registration-page.component';
import { SharedModule } from 'src/shared/modules/shared.modules';
import { IncidentRegistrationPageRoutingModule } from './incident-registration-page-routing.module';
import { ViolationReasonsFormComponent } from 'src/shared/components/violation-reasons-form/violation-reasons-form.component';
import { AdminRepresentativeFormComponent } from 'src/shared/components/admin-representative-form/admin-representative-form.component';
import { AdminDataFormComponent } from 'src/shared/components/admin-data-form/admin-data-form.component';
import { AdminAddressFormComponent } from 'src/shared/components/admin-address-form/admin-address-form.component';

const COMPONENTS = [
     ViolationReasonsFormComponent,
     AdminRepresentativeFormComponent,
     AdminDataFormComponent,
     AdminAddressFormComponent,
]

@NgModule({
     declarations: [
          COMPONENTS,
          IncidentRegistrationPageComponent,

     ],

     imports: [SharedModule, IncidentRegistrationPageRoutingModule],
})
export class IncidentRegistrationPageModule {}
