import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { BaseForm } from './base.form';
import { atLeastOne, atLeastOneValidator } from '../validators/at-least-one.validator';
//section8
export class PossibleConsequencesForm extends BaseForm {
     protected frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group(
               {
                    description: ['', []],
                    items: new FormArray([]),
               },
               // {
               //      validator: atLeastOneValidator,
               // },
               {
                    validator: atLeastOne,
               }
          );
     }
     public get description(): AbstractControl | null {
          return this.frm.get('description');
     }

     public get itemsArray(): FormArray {
          return this.form.get('items') as FormArray;
     }

     public createFormArray(): FormGroup {
          return this.fb.group({
               id: [''],
               name: [''],
          });
     }

     public getItemsControls(): AbstractControl[] {
          return (this.form.get('items') as FormArray).controls;
     }
}
