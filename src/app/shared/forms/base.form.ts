import { FormBuilder, FormGroup } from '@angular/forms';

export abstract class BaseForm {
  protected abstract frm: FormGroup;

  protected abstract createForm(): FormGroup;

  constructor(public fb: FormBuilder) {}

  get form(): FormGroup {
    return this.frm;
  }
}
