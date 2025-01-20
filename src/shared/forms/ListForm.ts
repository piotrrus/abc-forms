import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

export class ListForm {
     public form: FormGroup = this.createFormsArray();

     constructor(private fb: FormBuilder) {}

     public get itemsArray(): FormArray {
          return this.form.get('items') as FormArray;
     }

     public createForm(): FormGroup {
          return this.fb.group({
               id: [''],
               name: [''],
          });
     }

     public getItemsControls(): AbstractControl[] {
          return (this.form.get('items') as FormArray).controls;
     }

     private createFormsArray(): FormGroup {
          return (this.form = this.fb.group({
               items: new FormArray([]),
          }));
     }

     private get items(): AbstractControl | null {
          return this.form.get('items');
     }
}
