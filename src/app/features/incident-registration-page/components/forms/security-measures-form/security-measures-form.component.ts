import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { List } from '@features/incident-registration-page/models/list.interface';
import { BaseFormComponent } from '@shared/components/base-form.component';
import { SecurityMeasuresForm } from '@shared/forms/security-measures.form';

@Component({
     selector: 'app-security-measures-form',
     templateUrl: './security-measures-form.component.html',
     styleUrls: ['./security-measures-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecurityMeasuresFormComponent extends BaseFormComponent implements OnInit {
     @Output() public formChange = new EventEmitter<List[]>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: SecurityMeasuresForm = new SecurityMeasuresForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
}
