import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class NrOfPersonsForm extends BaseForm {
     protected frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               nrOfViolated: ['', [Validators.required]],
               nrOfViolatedData: ['', [Validators.required]],
          });
     }

     public get nrOfViolated(): AbstractControl | null {
          return this.frm.get('nrOfViolated');
     }
     public get nrOfViolatedData(): AbstractControl | null {
          return this.frm.get('nrOfViolatedData');
     }
}