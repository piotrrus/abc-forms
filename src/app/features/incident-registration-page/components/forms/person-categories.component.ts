import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from 'src/shared/components/base-form.component';
import { ListForm } from 'src/shared/forms/ListForm.form';

@Component({
     selector: 'app-person-categories-form',
     templateUrl: './person-categories-form.component.html',
     styleUrls: ['./person-categories-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonCategoriesFormComponent extends BaseFormComponent implements OnInit {
    @Input() set personCategoriesList(personCategoriesList: List[] | null) {
        personCategoriesList ? this.initPersonCategories(personCategoriesList) : null;
    }

    @Output() public formChange = new EventEmitter<List[]>();
    @Output() public isFormValid = new EventEmitter<boolean>();

    public form: ListForm = new ListForm(this.fb);

	private personCategories[]: List[];

	private initPersonCategories(personCategories: List[]): void {
		for(let category of personCategories){
			this.personCategories.push(category);
		} 
	}

	public updatePersonCategories(value: boolean, id: number): void {
		value ? this.personCategories[id].value = value : null
	}
}
