import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { List } from '@features/incident-registration-page/models/list.interface';
import { BaseFormComponent } from 'src/shared/components/base-form.component';
import { NrOfPersonsForm } from 'src/shared/forms/nr-of-persons.form';

@Component({
     selector: 'app-number-of-persons',
     templateUrl: './number-of-persons.component.html',
     styleUrls: ['./number-of-persons.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberOfPersonsComponent extends BaseFormComponent implements OnInit {
     @Output() public formChange = new EventEmitter<List[]>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: NrOfPersonsForm = new NrOfPersonsForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
}

//
