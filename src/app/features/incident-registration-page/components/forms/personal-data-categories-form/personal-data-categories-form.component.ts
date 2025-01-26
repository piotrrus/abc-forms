import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { List } from '@features/incident-registration-page/models/list.interface';
import { BaseFormComponent } from 'src/shared/components/base-form.component';
import { PersonalDataCategoriesForm } from 'src/shared/forms/personal-data-categories.form';

@Component({
     selector: 'app-personal-data-categories-form',
     templateUrl: './personal-data-categories-form.component.html',
     styleUrls: ['./personal-data-categories-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalDataCategoriesFormComponent extends BaseFormComponent implements OnInit {
     @Input() set personalBasicCategoriesList(personalBasicCategoriesList: List[] | null) {
          personalBasicCategoriesList ? this.addFormBasicItems(personalBasicCategoriesList) : null;
     }
     @Input() set personalSpecialCategoriesList(personalSpecialCategoriesList: List[] | null) {
          personalSpecialCategoriesList ? this.addFormSpecialItems(personalSpecialCategoriesList) : null;
     }
     @Input() set personalRodoCategoriesList(rodoCategoriesList: List[] | null) {
          rodoCategoriesList ? this.addFormRodoItems(rodoCategoriesList) : null;
     }

     @Output() public formChange = new EventEmitter<List[]>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: PersonalDataCategoriesForm = new PersonalDataCategoriesForm(this.fb);

     public basicCategories: List[] = [];
     public specialCategories: List[] = [];
     public rodoCategories: List[] = [];

     public basics: FormArray = this.form.basicsArray;
     public specials: FormArray = this.form.specialsArray;
     public rodo: FormArray = this.form.rodoArray;

     public isBasicOthersVisible: boolean = false;
     public isRodoOthersVisible: boolean = false;

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }

     private addFormBasicItems(categories: List[]): void {
          for (let category of categories) {
               this.basicCategories.push(category);
               this.basics.push(this.form.createFormArray());
          }
     }

     private addFormRodoItems(categories: List[]): void {
          for (let category of categories) {
               this.rodoCategories.push(category);
               this.rodo.push(this.form.createFormArray());
          }
     }

     private addFormSpecialItems(categories: List[]): void {
          for (let category of categories) {
               this.specialCategories.push(category);
               this.specials.push(this.form.createFormArray());
          }
     }

     public assignBasicCategories(value: boolean, id: number): void {
          value ? (this.basicCategories[id].value = value) : null;
          this.basicCategories[id].name.includes('Inne') ? this.setBasicsOthersValidation(value) : null;
     }
     public assignSpecialCategories(value: boolean, id: number): void {
          value ? (this.specialCategories[id].value = value) : null;
     }
     public assignRodoCategories(value: boolean, id: number): void {
          value ? (this.rodoCategories[id].value = value) : null;
          this.rodoCategories[id].name === 'Inne' ? this.setRodoOthersValidation(value) : null;
     }

     public getBasicsControls(): AbstractControl[] {
          return this.form.getBasicsControls();
     }
     public getSpecialsControls(): AbstractControl[] {
          return this.form.getSpecialsControls();
     }
     public getRodoControls(): AbstractControl[] {
          return this.form.getRodoControls();
     }

     private setBasicsOthersValidation(isOthers: boolean): void {
          this.isBasicOthersVisible = isOthers;
          const basicOthersFormField: AbstractControl | null = this.form.basicOthers;
          isOthers
               ? basicOthersFormField?.setValidators([
                      Validators.required,
                      Validators.minLength(3),
                      Validators.maxLength(30),
                 ])
               : basicOthersFormField?.setValidators([]);
          basicOthersFormField?.updateValueAndValidity();
     }

     private setRodoOthersValidation(isOthers: boolean): void {
          this.isRodoOthersVisible = isOthers;
          const rodoOthersFormField: AbstractControl | null = this.form.rodoOthers;
          isOthers
               ? rodoOthersFormField?.setValidators([
                      Validators.required,
                      Validators.minLength(3),
                      Validators.maxLength(30),
                 ])
               : rodoOthersFormField?.setValidators([]);
          rodoOthersFormField?.updateValueAndValidity();
     }
}
