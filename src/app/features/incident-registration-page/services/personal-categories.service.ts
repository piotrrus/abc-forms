import { Injectable } from '@angular/core';
import { catchError, Observable, shareReplay, take, throwError } from 'rxjs';
import { List } from '@features/incident-registration-page/models/list.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { COMMON_MESSAGES } from '@shared/enums/common-messages';

@Injectable()
export class PersonalCategoriesService {
     constructor(private http: HttpClient) {}

     public getBasicCategorieList(): Observable<List[]> {
          return this.http.get<List[]>('assets/data/personal-basic-data.json').pipe(
               shareReplay(1),
               take(1),
               catchError((error: HttpErrorResponse) => {
                    console.log(`${COMMON_MESSAGES.ERROR_OCCURED} ${error.message}`);
                    return throwError(() => error);
               })
          );
     }
     public getRodoCategorieList(): Observable<List[]> {
          return this.http.get<List[]>('assets/data/personal-rodo-data.json').pipe(
               shareReplay(1),
               take(1),
               catchError((error: HttpErrorResponse) => {
                    console.log(`${COMMON_MESSAGES.ERROR_OCCURED} ${error.message}`);
                    return throwError(() => error);
               })
          );
     }
     public getSpecialCategorieList(): Observable<List[]> {
          return this.http.get<List[]>('assets/data/personal-special-data.json').pipe(
               shareReplay(1),
               take(1),
               catchError((error: HttpErrorResponse) => {
                    console.log(`${COMMON_MESSAGES.ERROR_OCCURED} ${error.message}`);
                    return throwError(() => error);
               })
          );
     }
}
