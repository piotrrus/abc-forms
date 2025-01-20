import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { List } from '@features/incident-registration-page/models/list.interface';
import { BaseFormComponent } from 'src/shared/components/base-form.component';
import { ListForm } from 'src/shared/forms/ListForm';

@Component({
     selector: 'app-incident-results-form',
     templateUrl: './incident-results-form.component.html',
     styleUrls: ['./incident-results-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncidentResultsFormComponent extends BaseFormComponent implements OnInit {
    @Input() set incidentResultsList(incidentResultsList: List[] | null) {
        incidentResultsList ? this.initIncidentResults(incidentResultsList) : null;
    }

    @Output() public formChange = new EventEmitter<List[]>();
    @Output() public isFormValid = new EventEmitter<boolean>();

    public form: ListForm = new ListForm(this.fb);

	private incidentResults: List[] = []

    constructor(private fb: FormBuilder) {
        super();
   }

    public ngOnInit(): void {
        this.checkFormAndEmit();
   }

	private initIncidentResults(incidentResultsList: List[]): void {
		for(let incident of incidentResultsList){
			this.incidentResults.push(incident);
		} 
	}

	public updateIncidentResults(value: boolean, id: number): void {
		value ? this.incidentResults[id].value = value ;
	}
}
