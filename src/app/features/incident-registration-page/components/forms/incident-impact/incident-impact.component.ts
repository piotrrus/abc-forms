import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder } from '@angular/forms';
import { List } from '@features/incident-registration-page/models/list.interface';
import { BaseFormComponent } from '@shared/components/base-form.component';
import { PossibleConsequencesForm } from '@shared/forms/possible-consequences.form';

@Component({
     selector: 'app-incident-impact',
     templateUrl: './incident-impact.component.html',
     styleUrls: ['./incident-impact.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncidentImpactComponent extends BaseFormComponent implements OnInit {
     @Input() set incidentImpactsList(incidentImpactsList: List[] | null) {
          incidentImpactsList ? this.initIncidentReasons(incidentImpactsList) : null;
     }

     @Output() public formChange = new EventEmitter<List[]>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: PossibleConsequencesForm = new PossibleConsequencesForm(this.fb);
     public items: FormArray = this.form.itemsArray;
     private incidentReasonData: List[] = [];

     constructor(private fb: FormBuilder) {
          super();
     }

     private initIncidentReasons(incidentReasonList: List[]): void {
          // for (let incident of incidentReasonList) {
          //      this.incidentReasonData.push(incident);
          //      this.items.push(this.form.createFormArray());
          // }
     }

     public updateIncidentReasons(value: boolean, id: number): void {
          value ? (this.incidentReasonData[id].value = value) : null;
     }

     public getItemsControls(): AbstractControl[] {
          return this.form.getItemsControls();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
}
