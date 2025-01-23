import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { List } from '@features/incident-registration-page/models/list.interface';

@Component({
     selector: 'app-section2',
     templateUrl: './section2.component.html',
     styleUrls: ['./section2.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Section2Component {
     @Input() countriesList: List[] | null = [];
     @Output() public adminForms = new EventEmitter<any>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public adminRepresentative: any;
     public adminData: any;
     public adminAddress: any;

     public onAdminDataFormChange($event: any): void {
          this.adminData = $event;
          this.createIncidentModel();
     }
     public onAdminAddressFormChange($event: any): void {
          this.adminAddress = $event;
          this.createIncidentModel();
     }
     public onAdminRepresentativeFormChange($event: any): void {
          this.adminRepresentative = $event;
          this.createIncidentModel();
     }

     private createIncidentModel(): void {
          const adminData: any = {
               ...this.adminData,
               ...this.adminAddress,
               ...this.adminRepresentative,
          };
          this.adminForms.emit(adminData);
     }
}
