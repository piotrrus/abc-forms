import { Component, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { distinctUntilChanged, takeUntil, tap } from 'rxjs';
import { BaseComponent } from './base.component';

@Component({
     template: '',
})
export abstract class BaseFormComponent extends BaseComponent {
     abstract form: { form: FormGroup };
     abstract formChange: EventEmitter<any>;
     abstract isFormValid: EventEmitter<boolean>;

     public checkFormAndEmit(): void {
          this.form.form.valueChanges
               .pipe(
                    distinctUntilChanged(),
                    tap(() => {
                         if (this.form.form.valid) {
                              this.formChange.emit(this.form.form.getRawValue());
                         }
                         this.isFormValid.emit(this.form.form.valid);
                    }),
                    takeUntil(this.destruct$)
               )
               .subscribe();
     }
}
