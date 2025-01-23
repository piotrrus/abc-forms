import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from 'src/shared/components/base-form.component';

import { RegistrationTypeForm } from 'src/shared/forms/registration-type.form';

@Component({
     selector: 'app-section1',
     templateUrl: './section1.component.html',
     styleUrls: ['./section1.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Section1Component extends BaseFormComponent implements OnInit {
     @Output() public formChange = new EventEmitter<any>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public adminRepresentative: any;
     public adminData: any;
     public adminAddress: any;
     public registrationType: number = 1;
     public registrationTypes = [
          { id: 1, name: 'Zgłoszenie kompletne' },
          { id: 2, name: 'Zgłoszenie wstępne' },
          { id: 3, name: 'Zgłoszenie uzupełniające' },
     ];
     public form: RegistrationTypeForm = new RegistrationTypeForm(this.fb);
     constructor(private fb: FormBuilder) {
          super();
     }
     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
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
          // this.adminForms.emit(adminData);
     }

     public selectOption(value: number): void {
          this.registrationType = value;
          console.log(this.registrationType);
     }
}
