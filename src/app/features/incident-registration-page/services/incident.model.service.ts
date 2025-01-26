import { Injectable } from '@angular/core';
import { Section11 } from '../models/countries.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class IncidentModelService {
     public incidentModel$: BehaviorSubject<any> = new BehaviorSubject(null);

     public section4Data: any;
     public section5Data: any;
     public section6Data: any;
     public section7Data: any;
     public section8Data: any;
     public section9Data: any;
     public section10Data: any;
     public section11Data = <Section11>{};

     // public getIncidentResultDescriptions(): Observable<List[]> {

     // }

     // public getIncidentImpactDescriptions(): Observable<List[]> {

     // }

     public onSection4FormChange($event: any): void {
          // console.log($event);
          this.section4Data = $event;
          // this.createIncidentModel()
     }

     public onSection11FormChange($event: Section11): void {
          // console.log($event);
          this.section11Data = $event;
          // this.createIncidentModel()
     }

     private createIncidentModel(): void {
          const incident: any = {
               // ...this.adminData,
               // ...this.adminAddress,
               // ...this.adminRepresentative,

               // ...this.incidentKinds,
               // ...this.violationReasons,
               // // ...this.transborderCountries,
               // ...this.incidentResults,
               // ...this.incidentImpact,
               // ...this.incidentReasons,

               ...this.section11Data,
          };
          this.incidentModel$.next(incident);
          console.log(incident);
     }
}
