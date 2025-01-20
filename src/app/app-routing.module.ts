import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import(
        '@features/incident-registration-page/incident-registration-page.module'
      ).then((m) => m.IncidentRegistrationPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import(
        '@features/incident-registration-page/incident-registration-page.module'
      ).then((m) => m.IncidentRegistrationPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
