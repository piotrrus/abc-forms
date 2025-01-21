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
    @Input() set personBasicList(personBasicList: List[] | null) {
        personBasicList ? this.initPersonDataCategories(personBasicList) : null;
    }
    @Input() set personSpecialList(personSpecialList: List[] | null) {
        personSpecialList ? this.initPersonDataCategories(personSpecialList) : null;
    }
    @Input() set personRodoList(personRodoList: List[] | null) {
        personRodoList ? this.initPersonDataCategories(personRodoList) : null;
    }

    @Output() public formChange = new EventEmitter<List[]>();
    @Output() public isFormValid = new EventEmitter<boolean>();

    public form: ListForm = new ListForm(this.fb);

    private personCategoryFormData[]: any;

	private personBasic[]: List[];
    private personSpecial[]: List[];
    private personRodo[]: List[];

	private initPersonDataCategories(personCategories: List[]): void {
		for(let category of personCategories){
			this.personBasic.push(category);
		} 
	}

	public updatePersonCategories(value: boolean, id: number): void {
		value ? this.personBasic[id].value = value : null
	}

    // getItemsControls
}
