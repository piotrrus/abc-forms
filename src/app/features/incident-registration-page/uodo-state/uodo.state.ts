import { Injectable } from '@angular/core';
import { State } from '@shared/state/state';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { DescriptionDTO } from 'src/description-dto';

export const DEFAULT_UODO_STATE = (): any => ({
     descriptionDTO: <DescriptionDTO>{},
});

@Injectable()
export class UodoState extends State<any> {
     private registrationType$ = new BehaviorSubject<string>('');

     constructor() {
          super(DEFAULT_UODO_STATE());
     }

     public setRegistrationType(value: string): void {
          this.registrationType$.next(value);
     }

     public patchUodoFormData(value: DescriptionDTO): void {
          this.patchState(value);
     }

     public getRegistrationType(): Observable<string> {
          return this.registrationType$.asObservable();
     }

     public getUodoValue(): Observable<any> {
          return this.state$.pipe(map((state: any) => state));
     }

     public patchSection(value: any, section: string): void {
          // mapSection(value, section)
          this.patchState(value);
     }
}
