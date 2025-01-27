import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '@core/api/api.service';

@Injectable()
export class IncidentsService extends ApiService {

    public getIncident(): Observable<IncidentData[]> {
        return this.get('incident_data.json');
    }
}

export interface IncidentData {
    value: string;
    label: string;
}
