import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder } from '@angular/forms';
import { Section11 } from '@features/incident-registration-page/models/countries.interface';
import { List } from '@features/incident-registration-page/models/list.interface';
import { BaseFormComponent } from '@shared/components/base-form.component';
import { TransborderForm } from '@shared/forms/transborder.form';
import { atLeastOne } from '@shared/validators/at-least-one.validator';

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
     @Output() public formChange = new EventEmitter<Section11>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: TransborderForm = new TransborderForm(this.fb);
     public items: FormArray = this.form.itemsArray;
     public countriesFormData: List[] = [];

     public startFirst = 0;
     public endFirst = 0;
     public startSec = 0;
     public endSec = 0;
     public isVisibleCountriesList: boolean = false;

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

     public hasImpact(isChecked: boolean): void {
          this.isVisibleCountriesList = isChecked;
          isChecked
               ? this.form.form.get('items')?.setValidators([atLeastOne()])
               : this.form.form.get('items')?.setValidators([]);

          this.form.form.get('items')?.updateValueAndValidity();
     }

     public addCountry(value: boolean, id: number): void {
          console.log(value, id);
          value ? (this.countriesFormData[id].value = value) : null;
     }

     public getItemsControls(): AbstractControl[] {
          return this.form.getItemsControls();
     }
}
