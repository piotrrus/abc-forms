import { FormControl } from '@angular/forms';

export function validateNip(control: FormControl) {

  /**
   * NIP is a 10 digit number. Last digit is control digit.
   * Control is  a sum of multiply each digit by it's weight
   * Each digit has weights: [6, 5, 7, 2, 3, 4, 5, 6, 7]
  */
  const nip = control.value;

  if (control.value === undefined) {
    return null;
  }

  if (control.value === true || control.value === false || control.value === null) {
    return {
      validateNip: {
        valid: false
      }
    };
  }

  const NIP_REGEX = '/^[0-9]{10}$/';

  const controlValue = control.value ? control.value.replace(' ', '') : '';

  let isNipValid: boolean;

  isNipValid = checkControlSum(controlValue);

  function checkControlSum(controlValue) {
    let isNipValid: boolean = false;
    let checksum = 0;
    const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
    const controlNumber = parseInt(controlValue.charAt(9, 10));

    for (let i = 0; i < controlValue.length - 1; i++) {
      checksum += (parseInt(controlValue.charAt(i, 1)) * weights[i]);
    }

    if (checksum % 11 === controlNumber) {
      isNipValid = true;
    }

    return isNipValid;
  }

  return isNipValid
    ? null
    : {
      validateNip: {
        valid: false
      }
    };
}
