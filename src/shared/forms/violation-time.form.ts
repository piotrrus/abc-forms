import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class ViolationTimeForm extends BaseForm {
     protected frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               start: ['', [Validators.required]],
               end: ['', [Validators.required]],
          });
     }

     public get start(): AbstractControl | null {
          return this.frm.get('start');
     }

     public get end(): AbstractControl | null {
          return this.frm.get('end');
     }
}
