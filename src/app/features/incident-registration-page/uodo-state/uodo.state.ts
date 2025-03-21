import { Injectable } from '@angular/core';
import { State } from '@shared/state/state';
import { map, Observable } from 'rxjs';
import { DescriptionDTO } from 'src/description-dto';

export const DEFAULT_UODO_STATE = (): any => ({
     descriptionDTO: <DescriptionDTO>{},
});

@Injectable()
export class UodoState extends State<any> {
     constructor() {
          super(DEFAULT_UODO_STATE());
     }

     public patchUodoForm(value: any): void {
          this.patchState(value);
     }

     public getUodoValue(): Observable<any> {
          return this.state$.pipe(map((state: any) => state));
     }

     public patchSection(value: any, section: string): void {
          // mapSection(value, section)
          this.patchState(value);
     }
}
