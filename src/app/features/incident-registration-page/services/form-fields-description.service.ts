import { Injectable } from '@angular/core';
import { catchError, Observable, shareReplay, take, throwError, map } from 'rxjs';
import { List } from '@features/incident-registration-page/models/list.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { COMMON_MESSAGES } from 'src/shared/enums/common-messages';


@Injectable()
export class FormFieldsDescriptionService  {
     constructor(
          private http: HttpClient,
        ) {
        }

     public getIncidentResultDescriptions(): Observable<List[]> {
                    return this.http.get<List[]>('incident-result.json').pipe(
                         shareReplay(1),
                         take(1),
                         catchError((error: HttpErrorResponse) => {
                              console.log(`${COMMON_MESSAGES.ERROR_OCCURED} ${error.message}`);
                    
                              return throwError(() => error);
                         }));
     }

     public getIncidentImpactDescriptions(): Observable<List[]> {
          return this.http.get<List[]>('incident-impact.json').pipe(
               shareReplay(1),
               take(1),
               catchError((error: HttpErrorResponse) => {
                    console.log(`${COMMON_MESSAGES.ERROR_OCCURED} ${error.message}`);
                    return throwError(() => error);
               }));
}

     // public getPersonCategoriesDescriptions(): Observable<List[]> {
     //      return this.get('person-categories.json');
     // }
	 
	//  public getPersonCategoriesDescriptions(): Observable<List[]> {
     //      return this.get('person-categories.json');
     // }
	 
	//  public getIncidentResultDescriptions(): Observable<List[]> {
     //      return this.get('incident-result.json');
     // }

}
