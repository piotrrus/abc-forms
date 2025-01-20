import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

export class ListForm {
     public form: FormGroup = this.createFormsArray();

     constructor(private fb: FormBuilder) {} //to BaseArrayForm

     public get itemsArray(): FormArray { //to BaseArrayForm
          return this.form.get('items') as FormArray;
     }

     public createForm(): FormGroup {
          return this.fb.group({
               id: [''],
               name: [''],
          });
     }

     public getItemsControls(): AbstractControl[] { //to BaseArrayForm
          return (this.form.get('items') as FormArray).controls;
     }

     private createFormsArray(): FormGroup {  //to BaseArrayForm
          return (this.form = this.fb.group({
               items: new FormArray([]),
          }));
     }
	 
	 //???
	 private get items(): AbstractControl | null {
          return this.frm.get('items');
     }
	 
	 //komponent używający Formę
	/* 
	      @Input() public set consumptionStandard(consumptionStandard: ConsumptionStandard[] | null) {
          consumptionStandard ? this.addFormItems(consumptionStandard) : null;
     }*/
	/*public addFormItems(dataArr: ConsumptionStandard[]): void {
          for (let i = 0; i < dataArr.length; i++) {
               this.consumptionStandardTable.push(dataArr[i]);
               this.items.push(this.form.createForm(dataArr[i]));
          }
     }
	 */
}