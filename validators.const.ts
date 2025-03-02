import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import {
  authorRegex,
  emailRegex,
  lowerCaseRegex,
  nameRegex,
  numberRegex,
  specialCharacterRegex,
  upperCaseRegex,
  whiteSpaceRegex,
} from './regex.const';

export const nameValidators: ValidatorFn[] = [
  Validators.minLength(2),
  Validators.maxLength(35),
  Validators.pattern(nameRegex),
];

export const opinionAuthorValidators: ValidatorFn[] = [
  Validators.minLength(3),
  Validators.maxLength(64),
  Validators.pattern(authorRegex),
];

export const opinionContentValidators: ValidatorFn[] = [
  Validators.minLength(20),
  Validators.maxLength(2000),
];

export const questionContentValidators: ValidatorFn[] = [
  Validators.minLength(20),
  Validators.maxLength(400),
];

export const opinionTitleValidators: ValidatorFn[] = [
  Validators.minLength(2),
  Validators.maxLength(200),
];

export const emailValidators: ValidatorFn[] = [
  Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/),
];

export const nipValidators: ValidatorFn[] = [Validators.minLength(10)];

export const phoneValidators: ValidatorFn[] = [Validators.pattern(/^\d{9}$/)];

export const zipCodeValidators: ValidatorFn[] = [Validators.minLength(6)];

export const cityValidators: ValidatorFn[] = [
  Validators.minLength(2),
  Validators.pattern(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ -]+$/),
];

export const streetValidators: ValidatorFn[] = [
  Validators.minLength(2),
  Validators.pattern(
    /^(?=.*[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ])[0-9A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ '-]+$/
  ),
];

export const numberValidators: ValidatorFn[] = [
  Validators.pattern(/^(?!.*[;])(?!-[0-9])(?=.*[0-9])[^.*]+$/),
];

export const flatNumberValidators: ValidatorFn[] = [
  Validators.pattern(/^(?!.*[;])(?!-[0-9])[^.*]+$/),
];

export const lowerCaseValidator: ValidatorFn =
  Validators.pattern(lowerCaseRegex);

export const upperCaseValidator: ValidatorFn =
  Validators.pattern(upperCaseRegex);

export const numberValidator: ValidatorFn = Validators.pattern(numberRegex);

export const specialCharacterValidator: ValidatorFn = Validators.pattern(
  specialCharacterRegex
);

export const notEmailValidator: ValidatorFn = (control: AbstractControl) => {
  return emailRegex.test(control.value) === true ? { isEmail: true } : null;
};

export const noWhiteSpaceValidator: ValidatorFn = (
  control: AbstractControl
) => {
  return whiteSpaceRegex.test(control.value) === true
    ? { containsWhiteSpace: true }
    : null;
};

export const loginPasswordValidators: ValidatorFn[] = [
  Validators.minLength(5),
  Validators.maxLength(30),
];

export const newPasswordValidators: ValidatorFn[] = [
  Validators.minLength(8),
  lowerCaseValidator,
  upperCaseValidator,
  numberValidator,
  specialCharacterValidator,
  notEmailValidator,
  noWhiteSpaceValidator,
  Validators.maxLength(30),
];
