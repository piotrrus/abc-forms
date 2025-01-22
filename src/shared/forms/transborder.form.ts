import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { BaseArrayForm } from './base-array.form';
//section11
export class TransborderForm extends BaseArrayForm {
     protected frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               description: ['', []],
               items: new FormArray([]),
          });
     }

     public get description(): AbstractControl | null {
          return this.frm.get('description');
     }
}
