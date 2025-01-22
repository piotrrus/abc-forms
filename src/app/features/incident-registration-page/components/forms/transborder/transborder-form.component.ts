import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder } from '@angular/forms';
import { List } from '@features/incident-registration-page/models/list.interface';
import { BaseFormComponent } from 'src/shared/components/base-form.component';
import { ListForm } from 'src/shared/forms/list-form';

@Component({
     selector: 'app-transborder-form',
     templateUrl: './transborder-form.component.html',
     styleUrls: ['./transborder-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransBorderFormComponent extends BaseFormComponent {
     @Input() set countriesList(countriesList: List[] | null) {
          countriesList ? this.addFormItems(countriesList) : null;
          console.log(countriesList);
     }
     @Output() public formChange = new EventEmitter<List[]>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: ListForm = new ListForm(this.fb);
     public items: FormArray = this.form.itemsArray;
     public countriesFormData: List[] = [];

     constructor(private fb: FormBuilder) {
          super();
     }

     // private initCountries(incidentReasonList: List[]): void {
     //      for (let incident of incidentReasonList) {
     //           this.countriesFormData.push(incident);
     //      }
     //      // console.log()
     //      // this.form.
     // }

     public getItemsControls(): AbstractControl[] {
          return this.form.getItemsControls();
     }

     public addFormItems(dataArr: List[]): void {
          for (let i = 0; i < dataArr.length; i++) {
               this.countriesFormData.push(dataArr[i]);
               this.items.push(this.form.createForm());
          }
          console.log(this.countriesFormData);
     }

     public assignCountry(value: boolean, id: number): void {
          value ? (this.countriesFormData[id].value = value) : null;
     }
}
