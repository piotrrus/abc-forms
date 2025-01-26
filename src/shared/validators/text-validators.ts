import { ValidatorFn, Validators } from '@angular/forms';

export const othersValidators: ValidatorFn[] = [
     Validators.minLength(3),
     Validators.maxLength(30),
     Validators.required,
];
