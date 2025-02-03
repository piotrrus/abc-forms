import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { List } from '@features/incident-registration-page/models/list.interface';
import { BaseFormComponent } from '@shared/components/base-form.component';
import { ListForm } from '@shared/forms/list-form';

@Component({
     selector: 'app-incident-kinds-form',
     templateUrl: './incident-kinds-form.component.html',
     styleUrls: ['./incident-kinds-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncidentKindsFormComponent extends BaseFormComponent implements OnInit {
     @Input() set incidentKinds(incidentKinds: List[] | null) {
          incidentKinds ? this.initIncidentKinds(incidentKinds) : null;
     }

     @Output() public formChange = new EventEmitter<List[]>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: ListForm = new ListForm(this.fb);

     private incidentKind: List[] = [];

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }

     private initIncidentKinds(incidentReasonList: List[]): void {
          for (let incident of incidentReasonList) {
               this.incidentKind.push(incident);
          }
     }

     public updateIncidentKinds(value: boolean, id: number): void {
          value ? (this.incidentKind[id].value = value) : null;
     }

     public getItemsControls(): AbstractControl[] {
          return this.form.getItemsControls();
     }
}
