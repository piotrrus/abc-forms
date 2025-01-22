import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class ViolationDetectionForm extends BaseForm {
     protected frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               dateDiscoveryInfringement: ['', [Validators.required]],
               methodDeterminingViolation: ['', [Validators.required]],
               dateInformationSubject: ['', [Validators.required]],
               descriptionDateTimeEnd: ['', [Validators.required]],
          });
     }

     public get date(): AbstractControl | null {
          return this.frm.get('date');
     }

     public get end(): AbstractControl | null {
          return this.frm.get('end');
     }
}
