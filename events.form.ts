import { AbstractControl, FormGroup } from '@angular/forms';
import { BaseForm } from './base.form';
import { clientEventsValidator } from './validators/client-events.validator';

export class EventsForm extends BaseForm {
     protected frm = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group(
               {
                    measureDate: [''],
                    probeDate: [''],
                    deliveryDate: [''],
               },
               {
                    validator: clientEventsValidator,
               }
          );
     }

     public get measureDate(): AbstractControl | null {
          return this.frm.get('measureDate');
     }
     public get probeDate(): AbstractControl | null {
          return this.frm.get('probeDate');
     }
     public get deliveryDate(): AbstractControl | null {
          return this.frm.get('deliveryDate');
     }
}
