import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { BaseArrayForm } from './base-array.form';

export class TransborderForm extends BaseArrayForm {
     protected frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               theBreachIsCrossBorderInNature: ['', []],
               items: new FormArray([]),
          });
     }

     public get theBreachIsCrossBorderInNature(): AbstractControl | null {
          return this.frm.get('theBreachIsCrossBorderInNature');
     }
}
