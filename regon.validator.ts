import {FormControl} from '@angular/forms';

export function validateRegon(control: FormControl) {

    // REGON is a 9 or 14 digit number. Last digit is control digit from equation:
    // [ sum from 1 to (9 or 14) (x[i]*w[i]) ] mod 11; where x[i] is pointed NIP digit and w[i] is pointed digit
    // from [8 9 2 3 4 5 6 7] for 9 and [2 4 8 5 0 9 7 3 6 1 2 4 8] for 14 digits.

    if (control.value === '') {
        return null;
    }


    if (control.value === true || control.value === false || control.value === null) {
        return {
            validateRegon: {
                valid: false
            }
        };
    }

    const controlValue = control.value ? control.value.replace('-', '') : '';

    let isRegonValid: boolean;
    const REGON_REGEXP_1 = /^\d{9}$/i;
    let weights;
    let checksum = 0;
    let mod;

    function checkControlSum(weightsArray) {
        for (let i = 0; i < controlValue.length - 1; i++) {
            checksum += controlValue.charAt(i) * weightsArray[i];
        }
        mod = checksum % 11;

        if (mod === 10) {
            mod = 0;
        }

        if (mod === parseInt(controlValue.charAt(controlValue.length - 1), 10)) {
            isRegonValid = true;
        } else {
            isRegonValid = false;
        }
    }


    weights = [8, 9, 2, 3, 4, 5, 6, 7];
    checkControlSum(weights);


    return isRegonValid
        ? null
        : {
            validateRegon: {
                valid: false
            }
        };
}
