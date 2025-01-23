import { AbstractControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class RegistrationTypeForm extends BaseForm {
     protected frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               registrationTypeId: ['', [Validators.required]],
               optionalSign: ['', [Validators.maxLength(30)]],
               theViolationHasBeenReportedOtherCoutry: ['', [Validators.required]],
               addTaskSignUodo: ['', [Validators.required, Validators.maxLength(20)]],
               addDateReopen: [''],
               addDateOld: ['', []],
               theViolationHasBeenReported: ['', []],
               addNameDepart: ['', []],
               addSignatureRegistration: ['', []],
          });
     }

     public get registrationTypeId(): AbstractControl | null {
          return this.frm.get('registrationTypeId');
     }

     public get theViolationHasBeenReportedOtherCoutry(): AbstractControl | null {
          return this.frm.get('theViolationHasBeenReportedOtherCoutry');
     }

     public get addTaskSignUodo(): AbstractControl | null {
          return this.frm.get('addTaskSignUodo');
     }

     public get addDateReopen(): AbstractControl | null {
          return this.frm.get('addDateReopen');
     }

     public get addDateOld(): AbstractControl | null {
          return this.frm.get('addDateOld');
     }
     public get theViolationHasBeenReported(): AbstractControl | null {
          return this.frm.get('theViolationHasBeenReported');
     }
     public get addNameDepart(): AbstractControl | null {
          return this.frm.get('addNameDepart');
     }
     public get addSignatureRegistration(): AbstractControl | null {
          return this.frm.get('addSignatureRegistration');
     }
}
