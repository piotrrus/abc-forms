import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from 'src/shared/components/base-form.component';
import { RegistrationTypeForm } from 'src/shared/forms/registration-type.form';

@Component({
     selector: 'app-section6',
     templateUrl: './section6.component.html',
     styleUrls: ['./section6.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Section6Component extends BaseFormComponent implements OnInit {
     @Output() public formChange = new EventEmitter<any>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: RegistrationTypeForm = new RegistrationTypeForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }
     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
}
