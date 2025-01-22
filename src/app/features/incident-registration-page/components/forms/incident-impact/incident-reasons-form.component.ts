import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { List } from '@features/incident-registration-page/models/list.interface';
import { BaseFormComponent } from 'src/shared/components/base-form.component';
import { ListForm } from 'src/shared/forms/list-form';

@Component({
     selector: 'app-incident-reasons-form',
     templateUrl: './incident-reasons-form.component.html',
     styleUrls: ['./incident-reasons-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncidentReasonsFormComponent extends BaseFormComponent implements OnInit {
     @Input() set incidentReason(incidentReason: List[] | null) {
          incidentReason ? this.initIncidentReasons(incidentReason) : null;
     }

     @Output() public formChange = new EventEmitter<List[]>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: ListForm = new ListForm(this.fb);

     private incidentReasonData: List[] = [];

     constructor(private fb: FormBuilder) {
          super();
     }

     private initIncidentReasons(incidentReasonList: List[]): void {
          for (let incident of incidentReasonList) {
               this.incidentReasonData.push(incident);
          }
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
