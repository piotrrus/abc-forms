import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class AdminRepresentativeForm extends BaseForm {
     protected frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               name: ['', [Validators.required]],
               position: ['', [Validators.required]],
          });
     }

     public get name(): AbstractControl | null {
          return this.frm.get('name');
     }
     public get position(): AbstractControl | null {
          return this.frm.get('position');
     }
}
