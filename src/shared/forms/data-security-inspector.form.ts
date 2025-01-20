import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class DataSecurityInspectorForm extends BaseForm {
     protected frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               name: ['', [Validators.required]],
               phone: ['', [Validators.required]],
               email: ['', [Validators.required, Validators.email]],
               notAssigned: [''],
          });
     }

     public get name(): AbstractControl | null {
          return this.frm.get('name');
     }
     public get phone(): AbstractControl | null {
          return this.frm.get('phone');
          name;
     }
     public get email(): AbstractControl | null {
          return this.frm.get('email');
     }
     public get notAssigned(): AbstractControl | null {
          return this.frm.get('notAssigned');
     }
}
