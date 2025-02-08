import { Injectable } from '@angular/core';
import { catchError, Observable, shareReplay, take, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { List } from '../models/list.interface';
import { COMMON_MESSAGES } from '@shared/enums/common-messages';
import { ApiService } from '@shared/services/api.service';
// import { NotificationMessageService } from '@shared/services/notifications/notification.service';

@Injectable()
export class SectorsService extends ApiService {
     // constructor(private http: HttpClient,  private notificationService: NotificationMessageService) {
     //      super(http, notificationService)
     // }

     public getPrivateSectors(): Observable<List[]> {
          return this.get<List[]>('assets/data/private-sectors.json').pipe(
               shareReplay(1),
               take(1),
               catchError((error: HttpErrorResponse) => {
                    console.log(`${COMMON_MESSAGES.ERROR_OCCURED} ${error.message}`);
                    return throwError(() => error);
               })
          );
     }
     public getPublicSectors(): Observable<List[]> {
          return this.get<List[]>('assets/data/public-sectors.json').pipe(
               shareReplay(1),
               take(1),
               catchError((error: HttpErrorResponse) => {
                    console.log(`${COMMON_MESSAGES.ERROR_OCCURED} ${error.message}`);
                    return throwError(() => error);
               })
          );
     }
}
