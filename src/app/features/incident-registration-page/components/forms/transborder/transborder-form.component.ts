import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder } from '@angular/forms';
import { List } from '@features/incident-registration-page/models/list.interface';
import { BaseFormComponent } from 'src/shared/components/base-form.component';
import { TransborderForm } from 'src/shared/forms/transborder.form';

@Component({
     selector: 'app-transborder-form',
     templateUrl: './transborder-form.component.html',
     styleUrls: ['./transborder-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransBorderFormComponent extends BaseFormComponent {
     @Input() set countriesList(countriesList: List[] | null) {
          countriesList ? this.addFormItems(countriesList) : null;
     }
     @Output() public formChange = new EventEmitter<List[]>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: TransborderForm = new TransborderForm(this.fb);
     public items: FormArray = this.form.itemsArray;
     public countriesFormData: List[] = [];

     public startFirst = 0;
     public endFirst = 0;
     public startSec = 0;
     public endSec = 0;

     constructor(private fb: FormBuilder) {
          super();
     }
     public ngOnInit(): void {
          this.checkFormAndEmit();
     }

     private addFormItems(dataArr: List[]): void {
          for (let item of dataArr) {
               this.countriesFormData.push(item);
               this.items.push(this.form.createFormArray());
          }

          this.endFirst = this.countriesFormData.length / 2;
          this.startSec = this.endFirst + 1;
          this.endSec = this.countriesFormData.length;
     }

     public hasImpact(value: boolean): void {
          console.log(value);
          // this.form.getItemsControls()
          // this.form.form.get('items')?.disable();
          // for (let item of this.form.form.get('items').) {
          //      item.disable();
          // }
          // this.form.itemsArray.disable();
          this.form.form.get('items')?.get('name')?.disable();
          //.get('name')
          // console.log(this.form.form.get('items')?.get('name'));
          // this.form.form.get('items')?[0]. .get('name').disable();
     }

     public assignCountry(value: boolean, id: number): void {
          value ? (this.countriesFormData[id].value = value) : null;
     }

     public getItemsControls(): AbstractControl[] {
          return this.form.getItemsControls();
     }
}
