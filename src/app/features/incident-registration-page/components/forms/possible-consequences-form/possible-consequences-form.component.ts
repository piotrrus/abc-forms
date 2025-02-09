import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { List } from '@features/incident-registration-page/models/list.interface';
import { BaseFormComponent } from '@shared/components/base-form.component';
import { PossibleConsequencesForm } from '@shared/forms/possible-consequences.form';

@Component({
     selector: 'app-possible-consequences-form',
     templateUrl: './possible-consequences-form.component.html',
     styleUrls: ['./possible-consequences-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PossibleConsequencesFormComponent extends BaseFormComponent implements OnInit {
     @Input() set possibleConsequencesList(possibleConsequencesList: List[] | null) {
          possibleConsequencesList ? this.initPossibleConsequencesList(possibleConsequencesList) : null;
     }

     @Output() public formChange = new EventEmitter<any>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: PossibleConsequencesForm = new PossibleConsequencesForm(this.fb);
     public items: FormArray = this.form.itemsArray;
     public possibleConsequencesData: List[] = [];
     public isOthersVisible: boolean = false;

     constructor(private fb: FormBuilder) {
          super();
     }
     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
     private initPossibleConsequencesList(possibleConsequencesList: List[]): void {
          for (let item of possibleConsequencesList) {
               this.possibleConsequencesData.push(item);
               this.items.push(this.form.createFormArray());
          }
     }

     public assignPossibleConsequences(value: boolean, id: number): void {
          value ? (this.possibleConsequencesData[id].value = value) : null;
          this.possibleConsequencesData[id].name === 'Inne' ? this.setOthersField(value) : null;
     }

     public getItemsControls(): AbstractControl[] {
          return this.form.getItemsControls();
     }

     private setOthersField(isOthers: boolean): void {
          this.isOthersVisible = isOthers;
          isOthers
               ? this.form.description?.setValidators([
                      Validators.required,
                      Validators.minLength(3),
                      Validators.maxLength(30),
                 ])
               : this.form.description?.setValidators([]);
          this.form.description?.updateValueAndValidity();
     }
}
