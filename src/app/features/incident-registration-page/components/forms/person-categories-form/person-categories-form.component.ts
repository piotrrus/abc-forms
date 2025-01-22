import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder } from '@angular/forms';
import { List } from '@features/incident-registration-page/models/list.interface';
import { BaseFormComponent } from 'src/shared/components/base-form.component';
import { PersonCategoriesForm } from 'src/shared/forms/person-categories.form';

@Component({
     selector: 'app-person-categories-form',
     templateUrl: './person-categories-form.component.html',
     styleUrls: ['./person-categories-form.component.scss'],
})
export class PersonCategoriesFormComponent extends BaseFormComponent implements OnInit {
     @Input() set personCategoriesList(personCategoriesList: List[] | null) {
          personCategoriesList ? this.initPersonCategories(personCategoriesList) : null;
     }

     @Output() public formChange = new EventEmitter<List[]>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: PersonCategoriesForm = new PersonCategoriesForm(this.fb);
     public items: FormArray = this.form.itemsArray;
     public personCategories: List[] = [];

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
     private initPersonCategories(personCategories: List[]): void {
          for (let category of personCategories) {
               this.personCategories.push(category);
               this.items.push(this.form.createFormArray());
          }
     }

     public getItemsControls(): AbstractControl[] {
          return this.form.getItemsControls();
     }
     public assignCategory(value: boolean, id: number): void {
          value ? (this.personCategories[id].value = value) : null;
          console.log(this.personCategories);
     }
}
