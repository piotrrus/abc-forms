import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncidentRegistrationPageComponent } from './incident-registration-page.component';

const routes: Routes = [
  { path: '', component: IncidentRegistrationPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncidentRegistrationPageRoutingModule {}
