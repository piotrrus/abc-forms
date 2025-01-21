import { AbstractControl, FormGroup } from '@angular/forms';
import { BaseForm } from './base.form';
//section7
export class PersonCategoriesForm extends BaseForm {
     protected frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               description: : ['', []],
               categories: new FormArray([]),
          });
     }

     public get description(): AbstractControl | null {
          return this.frm.get('description');
     }

     public get categoriesArray(): FormArray {
          return this.form.get('categories') as FormArray;
     }

     public createFormArray(): FormGroup {
          return this.fb.group({
               id: [''],
               name: [''],
          });
     }
}
