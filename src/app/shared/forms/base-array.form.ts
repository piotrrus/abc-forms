import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

export abstract class BaseArrayForm {
     protected abstract frm: FormGroup;

     protected abstract createForm(): FormGroup;

     constructor(public fb: FormBuilder) {}

     get form(): FormGroup {
          return this.frm;
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
