import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '../../../../../../shared/components/base-form.component';
import { ViolationDetectionForm } from 'src/shared/forms/violation-detection.form';

@Component({
     selector: 'app-violation-detection-form',
     templateUrl: './violation-detection-form.component.html',
     styleUrls: ['./violation-detection-form.component.scss'],
})
export class ViolationDetectionFormComponent extends BaseFormComponent implements OnInit {
     @Output() public formChange = new EventEmitter<any>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: ViolationDetectionForm = new ViolationDetectionForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }
}
