import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { List } from '@features/incident-registration-page/models/list.interface';
import { BaseFormComponent } from 'src/shared/components/base-form.component';
import { ListForm } from 'src/shared/forms/list-form';

@Component({
     selector: 'app-incident-impact-form',
     templateUrl: './incident-impact-form.component.html',
     styleUrls: ['./incident-impact-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncidentImpactFormComponent extends BaseFormComponent implements OnInit {
     @Input() set incidentImpact(incidentImpact: List[] | null) {
          incidentImpact ? this.initIncidentImpacts(incidentImpact) : null;
     }

     @Output() public formChange = new EventEmitter<List[]>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: ListForm = new ListForm(this.fb);

     private incidentImpactData: List[] = [];

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }

     private initIncidentImpacts(incidentReasonList: List[]): void {
          for (let incident of incidentReasonList) {
               this.incidentImpactData.push(incident);
          }
     }

     public updateIncidentImpact(value: boolean, id: number): void {
          value ? (this.incidentImpactData[id].value = value) : null;
     }

     public getItemsControls(): AbstractControl[] {
          return this.form.getItemsControls();
     }
}
