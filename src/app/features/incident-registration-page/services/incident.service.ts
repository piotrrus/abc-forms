import { catchError, Observable, shareReplay, take, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { COMMON_MESSAGES } from 'src/shared/enums/common-messages';
import { Injectable } from '@angular/core';

@Injectable()
export class IncidentsService {
     constructor(private http: HttpClient) {}

     public getIncident(): Observable<IncidentData[]> {
          return this.http.get<IncidentData[]>('assets/data/incident_data2.json').pipe(
               shareReplay(1),
               take(1),
               catchError((error: HttpErrorResponse) => {
                    console.log(`${COMMON_MESSAGES.ERROR_OCCURED} ${error.message}`);
                    return throwError(() => error);
               })
          );
     }
}

export interface IncidentData {
     value: string;
     label: string;
}
