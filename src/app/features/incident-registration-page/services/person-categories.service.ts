import { Injectable } from '@angular/core';
import { catchError, Observable, shareReplay, take, throwError } from 'rxjs';
import { List } from '@features/incident-registration-page/models/list.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { COMMON_MESSAGES } from 'src/shared/enums/common-messages';

@Injectable()
export class PersonCategoriesService {
     constructor(private http: HttpClient) {}

     public getPersonCategories(): Observable<List[]> {
          return this.http.get<List[]>('assets/data/person-categories.json').pipe(
               shareReplay(1),
               take(1),
               catchError((error: HttpErrorResponse) => {
                    console.log(`${COMMON_MESSAGES.ERROR_OCCURED} ${error.message}`);
                    return throwError(() => error);
               })
          );
     }
}
