import { catchError, Observable, shareReplay, take, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { COMMON_MESSAGES } from '@shared/enums/common-messages';
import { Injectable } from '@angular/core';
import { ApiService } from '@shared/services/api.service';
import { DescriptionDTO } from 'src/description-dto';

@Injectable()
export class IncidentsService extends ApiService {
     public getIncident(): Observable<DescriptionDTO> {
          return this.get<DescriptionDTO>('assets/data/incident-data2.json').pipe(
               shareReplay(1),
               take(1),
               catchError((error: HttpErrorResponse) => {
                    console.log(`${COMMON_MESSAGES.ERROR_OCCURED} ${error.message}`);
                    return throwError(() => error);
               })
          );
     }
     public getIncidentList(): Observable<DescriptionDTO[]> {
          return this.get<DescriptionDTO[]>('assets/data/incident-list.json').pipe(
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
