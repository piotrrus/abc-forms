import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
     selector: 'app-section4',
     templateUrl: './section4.component.html',
     styleUrls: ['./section4.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Section4Component {
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
