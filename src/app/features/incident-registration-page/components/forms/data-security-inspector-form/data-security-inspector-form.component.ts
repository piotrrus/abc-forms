import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from 'src/shared/components/base-form.component';
import { DataSecurityInspectorForm } from 'src/shared/forms/data-security-inspector.form';

@Component({
     selector: 'app-data-security-inspector-form',
     templateUrl: './data-security-inspector-form.component.html',
     styleUrls: ['./data-security-inspector-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataSecurityInspectorFormComponent extends BaseFormComponent implements OnInit {
     @Output() public formChange = new EventEmitter<any>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: DataSecurityInspectorForm = new DataSecurityInspectorForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
}
