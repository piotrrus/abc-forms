import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/base-form.component';
import { ListForm } from '@shared/forms/ListForm.form';

@Component({
     selector: 'app-incident-reasons-form',
     templateUrl: './incident-reasons-form.component.html',
     styleUrls: ['./incident-reasons.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class incidentKindsFormComponent extends BaseFormComponent implements OnInit {
    @Input() set incidentKinds(incidentKinds: List[] | null) {
        incidentKinds ? this.initIncidentKinds(incidentKinds) : null;
    }

    @Output() public formChange = new EventEmitter<List[]>();
    @Output() public isFormValid = new EventEmitter<boolean>();

    public form: ListForm = new ListForm(this.fb);

	private incidentKind[]: List[];

	private initIncidentKinds(incidentReasonList: List[]): void {
		for(let incident of incidentReasonList){
			this.incidentReason.push(country);
		} 
	}

	public updateIncidentKinds(value: boolean, id: number): void {
		value ? incidentReason[id].value = value ;
	}
}

