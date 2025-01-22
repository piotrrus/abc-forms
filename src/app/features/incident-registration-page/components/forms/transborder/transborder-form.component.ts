import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder } from '@angular/forms';
import { List } from '@features/incident-registration-page/models/list.interface';
import { BaseFormComponent } from 'src/shared/components/base-form.component';
import { ListForm } from 'src/shared/forms/list-form';
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

     constructor(private fb: FormBuilder) {
          super();
     }

     private addFormItems(dataArr: List[]): void {
          for (let item of dataArr) {
               this.countriesFormData.push(item);
               this.items.push(this.form.createFormArray());
          }
          console.log(dataArr);
     }

     public hasImpact(value: boolean): void {
          console.log(value);
     }

     public assignCountry(value: boolean, id: number): void {
          value ? (this.countriesFormData[id].value = value) : null;
     }

     public getItemsControls(): AbstractControl[] {
          return this.form.getItemsControls();
     }
}
