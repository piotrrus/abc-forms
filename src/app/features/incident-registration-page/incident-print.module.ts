import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/modules/shared.modules';
import { IncidentsService } from './services/incident.service';
import { IncidentPrintHelper } from '@features/incident-printing/helpers/incident-print.helper';

@NgModule({
     declarations: [],
     imports: [SharedModule],
     providers: [
          // BasePrintHelper,
          IncidentPrintHelper,
          IncidentsService,
     ],
})
export class IncidentPrintModule {}
