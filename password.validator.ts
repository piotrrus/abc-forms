import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { UserPasswordForm } from '../user-password.form';

export function passwordMatchValidator(control: AbstractControl): void {
     const password: string = control.get('password')?.value as string;
     const confirmPassword: string = control.get('confirmPassword')?.value as string;

     if (password !== confirmPassword) {
          control.get('confirmPassword')?.setErrors({ noPassswordMatch: true });
     }
}

export function patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
     return (control: AbstractControl): { [key: string]: string } | null => {
          if (!control.value) {
               return null;
          }
          const valid: boolean = regex?.test(control?.value as string);
          return valid ? null : error;
     };
}

export function passwordUserDataValidator(form: UserPasswordForm, error: ValidationErrors): ValidatorFn {
     return (control: AbstractControl): { [key: string]: string } | null => {
          if (!control.value) {
               return null;
          }

          const password: string = form.password?.value as string;
          const userId: string = form.userId?.value as string;
          const firstName: string = form.firstName?.value as string;
          const surname: string = form.surname?.value as string;

          const valid: boolean =
               password.indexOf(userId) === -1 &&
               password.indexOf(firstName) === -1 &&
               password.indexOf(surname) === -1;

          if (!valid) {
               form.password?.setErrors({ PasswordHasUserData: true });
          }
          return valid ? null : error;
     };
}
