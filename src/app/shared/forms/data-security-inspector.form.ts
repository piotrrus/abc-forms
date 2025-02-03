import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class DataSecurityInspectorForm extends BaseForm {
     protected frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               fullname: ['', [Validators.required]],
               phoneNumber: ['', [Validators.required]],
               email: ['', [Validators.required, Validators.email]],
               notAssigned: [''],
          });
     }

     public get fullname(): AbstractControl | null {
          return this.frm.get('fullname');
     }
     public get phoneNumber(): AbstractControl | null {
          return this.frm.get('phoneNumber');
          name;
     }
     public get email(): AbstractControl | null {
          return this.frm.get('email');
     }
     public get notAssigned(): AbstractControl | null {
          return this.frm.get('notAssigned');
     }
}
