import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class SecurityMeasuresForm extends BaseForm {
     protected frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               description: ['', [Validators.required, Validators.minLength(2)]],
               measuresToAvoidAgain: ['', [Validators.minLength(2), Validators.maxLength(200)]],
               measuresAgainstImpacts: ['', [Validators.minLength(2), Validators.maxLength(200)]],
          });
     }

     public get description(): AbstractControl | null {
          return this.frm.get('description');
     }
     public get measuresToAvoidAgain(): AbstractControl | null {
          return this.frm.get('measuresToAvoidAgain');
     }
     public get measuresAgainstImpacts(): AbstractControl | null {
          return this.frm.get('measuresAgainstImpacts');
     }
}
