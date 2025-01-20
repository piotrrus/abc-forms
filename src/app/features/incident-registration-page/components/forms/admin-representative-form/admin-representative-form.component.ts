import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from 'src/shared/components/base-form.component';
import { AdminRepresentativeForm } from 'src/shared/forms/admin-representative.form';

@Component({
     selector: 'app-admin-representative-form',
     templateUrl: './admin-representative-form.component.html',
     styleUrls: ['./admin-representative-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRepresentativeFormComponent extends BaseFormComponent implements OnInit {
     @Output() public formChange = new EventEmitter<any>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: AdminRepresentativeForm = new AdminRepresentativeForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
}
