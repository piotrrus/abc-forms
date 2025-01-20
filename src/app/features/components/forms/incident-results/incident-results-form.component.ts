import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/base-form.component';
import { ListForm } from '@shared/forms/ListForm.form';

@Component({
     selector: 'app-incident-results-form',
     templateUrl: './incident-results-form.component.html',
     styleUrls: ['./incident-results-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class incidentResultsFormComponent extends BaseFormComponent implements OnInit {
    @Input() set incidentResultsList(incidentResultsList: List[] | null) {
        incidentResultsList ? this.initIncidentResults(incidentResults) : null;
    }

    @Output() public formChange = new EventEmitter<List[]>();
    @Output() public isFormValid = new EventEmitter<boolean>();

    public form: ListForm = new ListForm(this.fb);

	private incidentResults[]: List[];

	private initIncidentResults(incidentResultsList: List[]): void {
		for(let incident of incidentResultsList){
			this.incidentResults.push(country);
		} 
	}

	public updateIncidentResults(value: boolean, id: number): void {
		value ? incidentResults[id].value = value ;
	}
}
