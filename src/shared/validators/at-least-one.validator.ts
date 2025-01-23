import { AbstractControl, FormArray, ValidationErrors, ValidatorFn } from '@angular/forms';

export const atLeastOneValidator =
     () =>
     (control: AbstractControl): ValidationErrors | null => {
          console.log(control);
          const invalid = (control as FormArray).controls.some((c) => {
               console.log(c.value.key);
               c.value.key == '';
          });

          return invalid ? null : { atLeastOne: true };
     };

//export function passwordMatchValidator(control: AbstractControl): ValidatorFn {
// const password: string = control.get('password')?.value as string;
// const confirmPassword: string = control.get('confirmPassword')?.value as string;
//   const invalid = (control as FormArray).controls.some((c) => c.value.key == '');
//  return invalid ? { atLeastOneError: true } : null;
//  return invalid ? null : { atLeastOne: true };
//  return invalid ?  {'atLeastOneError': true} : null;
// if (password !== confirmPassword) {
//      control.get('confirmPassword')?.setErrors({ noPassswordMatch: true });
// }
//}

// export function patternValidator(): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: string } | null => {
//     const invalid = (control as FormArray).controls.some(c => c.value.key == '');
//       //  if (!control.value) {
//             // return null;
//       //  }
//       //  const valid: boolean = regex?.test(control?.value as string);
//       //  return valid ? null : error;
//       return invalid ?  {'atLeastOneError': true} : null;
//   };
// }

// export const atLeastOneValidator(control: AbstractControl): ValidatorFn => {
//   const invalid = (control as FormArray).controls.some(c => c.value.key == '');
//   return invalid ?  {'atLeastOneError': true} : null;
// }

// export const atLeastOneValidator(control: AbstractControl): (validator: ValidatorFn) => {
//   const items: string = control.get('password')?.value as string;
//     const invalid = (control as FormArray).controls.some(c => c.value.key == '');
//     return hasAtLeastOne ? null : { atLeastOne: true };
// };

export function atLeastOne(regex: RegExp, error: ValidationErrors): ValidatorFn {
     return (control: AbstractControl): { [key: string]: string } | null => {
          console.log(control);
          const invalidx = (control as FormArray).controls.some((c) => {
               console.log(c.value.key);
               c.value.key == '';
          });

          const invalid = (control as FormArray).controls.some((c) => c.value.key == '');
          if (!control.value) {
               return null;
          }
          const valid: boolean = regex?.test(control?.value as string);
          return valid ? null : error;
     };
}
