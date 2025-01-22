import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { List } from '@features/incident-registration-page/models/list.interface';
import { BaseFormComponent } from 'src/shared/components/base-form.component';
import { ListForm } from 'src/shared/forms/list-form';

@Component({
     selector: 'app-personal-data-categories-form',
     templateUrl: './personal-data-categories-form.component.html',
     styleUrls: ['./personal-data-categories-form.component.scss'],
})
export class PersonalDataCategoriesFormComponent extends BaseFormComponent implements OnInit {
     @Input() set personCategoriesList(personCategoriesList: List[] | null) {
          personCategoriesList ? this.initPersonCategories(personCategoriesList) : null;
     }

     @Output() public formChange = new EventEmitter<List[]>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: ListForm = new ListForm(this.fb);

     private personCategories: List[] = [];

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }

     private initPersonCategories(personCategories: List[]): void {
          for (let category of personCategories) {
               this.personCategories.push(category);
          }
     }

     public updatePersonCategories(value: boolean, id: number): void {
          value ? (this.personCategories[id].value = value) : null;
     }

     public getItemsControls(): AbstractControl[] {
          return this.form.getItemsControls();
     }
}
