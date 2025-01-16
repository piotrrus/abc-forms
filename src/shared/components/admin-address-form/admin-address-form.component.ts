import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '../base-form.component';
import { AdminAddressForm } from 'src/shared/forms/admin-address.form';

@Component({
     selector: 'app-admin-address-form',
     templateUrl: './admin-address-form.component.html',
     styleUrls: ['./admin-address-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminAddressFormComponent extends BaseFormComponent implements OnInit {
     @Output() public formChange = new EventEmitter<any>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: AdminAddressForm = new AdminAddressForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
}
