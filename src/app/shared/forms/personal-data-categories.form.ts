import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { BaseForm } from './base.form';
//section6
export class PersonalDataCategoriesForm extends BaseForm {
     protected frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               basic: new FormArray([]),
               basicOthers: [''],

               special: new FormArray([]),
               rodo: new FormArray([]),
               rodoOthers: [''],
          });
     }

     public get basicOthers(): AbstractControl | null {
          return this.frm.get('basicOthers');
     }
     public get rodoOthers(): AbstractControl | null {
          return this.frm.get('rodoOthers');
     }

     public get basic(): FormArray {
          return this.form.get('basic') as FormArray;
     }
     public get special(): FormArray {
          return this.form.get('special') as FormArray;
     }
     public get rodo(): FormArray {
          return this.form.get('rodo') as FormArray;
     }

     public createFormArray(): FormGroup {
          return this.fb.group({
               id: [''],
               name: [''],
          });
     }

     public getBasicsControls(): AbstractControl[] {
          return (this.form.get('basic') as FormArray).controls;
     }
     public getSpecialsControls(): AbstractControl[] {
          return (this.form.get('special') as FormArray).controls;
     }
     public getRodoControls(): AbstractControl[] {
          return (this.form.get('rodo') as FormArray).controls;
     }

     public get basicsArray(): FormArray {
          return this.form.get('basic') as FormArray;
     }
     public get specialsArray(): FormArray {
          return this.form.get('special') as FormArray;
     }
     public get rodoArray(): FormArray {
          return this.form.get('rodo') as FormArray;
     }
}
