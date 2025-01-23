import { FormControl } from '@angular/forms';

export function validateNip(control: FormControl) {
     if (control.value === '') {
          return null;
     }
     const nip = control.value;

     // if(typeof nip !== 'string')
     //     return false;

     if (control.value === true || control.value === false || control.value === null) {
          return {
               validateNip: {
                    valid: false,
               },
          };
     }

     //const controlValue = control.value ? control.value.replace('-', '') : '';

     nip.replace(/[\ \-]/gi, '');
     const weight = [6, 5, 7, 2, 3, 4, 5, 6, 7];
     let isNipValid: boolean = false;
     let sum = 0;
     let controlNumber = parseInt(nip.substring(9, 10));
     let weightCount = weight.length;
     for (let i = 0; i < weightCount; i++) {
          sum += parseInt(nip.substr(i, 1)) * weight[i];
     }

     isNipValid = sum % 11 === controlNumber;
     return isNipValid
          ? null
          : {
                 validateNip: {
                      valid: false,
                 },
            };
}
