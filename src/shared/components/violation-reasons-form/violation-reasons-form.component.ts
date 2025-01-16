import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '../base-form.component';
import { ViolationReasonForm } from 'src/shared/forms/violationReasons.form';

@Component({
  selector: 'app-violation-reasons-form',
  templateUrl: './violation-reasons-form.component.html',
  styleUrls: ['./violation-reasons-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViolationReasonsFormComponent
  extends BaseFormComponent
  implements OnInit
{
  @Output() public formChange = new EventEmitter<any>();
  @Output() public isFormValid = new EventEmitter<boolean>();

  public form: ViolationReasonForm = new ViolationReasonForm(this.fb);

  constructor(private fb: FormBuilder) {
    super();
  }

  public ngOnInit(): void {
    this.checkFormAndEmit();
  }
}
