import { AbstractControl, FormArray, ValidationErrors, ValidatorFn } from '@angular/forms';

export function atLeastOne(): ValidatorFn {
     return (control: AbstractControl): { [key: string]: string } | null => {
          const error: ValidationErrors = { noneHasBeenSelected: true };

          if (!control.value) {
               return null;
          }

          const valid = (control as FormArray).controls.some((c) => {
               return c.value.name;
          });
          return valid ? null : error;
     };
}
