import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from 'src/shared/components/base-form.component';
import { AdminDataForm } from 'src/shared/forms/admin.form';

@Component({
     selector: 'app-admin-data-form',
     templateUrl: './admin-data-form.component.html',
     styleUrls: ['./admin-data-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminDataFormComponent extends BaseFormComponent implements OnInit {
     @Output() public formChange = new EventEmitter<any>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: AdminDataForm = new AdminDataForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
}
