
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClientDetails } from '@features/clients-page/models/client-details.interface';
import { Client } from '@features/clients-page/services/client.interface';
import { BaseFormComponent } from '@shared/components/base-form.component';
import { ListForm } from '@shared/forms/ListForm.form';

@Component({
     selector: 'app-transborder-form',
     templateUrl: './transborder-form.component.html',
     styleUrls: ['./transborder-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class transBorderFormComponent extends BaseFormComponent implements OnInit {
    @Input() set countriesList(countriesList: List[] | null) {
        client ? this.form.form.patchValue(client) : null;
    }

    @Output() public formChange = new EventEmitter<Client>();
    @Output() public isFormValid = new EventEmitter<boolean>();

    public form: ListForm = new ListForm(this.fb);

	private countries[]: Countries[];

	private initCountries(countriesList: List[]): void {

		for(let country of countriesList){
			this.countries.push(country);
		} 
	}

	public updateCountries(value: boolean, id: number): void {
		value ? countries[id].value = value ;
	}
}

export interface Countries[] = [
	id: string;
	name: string;
	value: boolean;
]