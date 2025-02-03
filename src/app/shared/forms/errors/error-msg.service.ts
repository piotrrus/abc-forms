import { Injectable } from '@angular/core';
import { ValidationError } from './validation-error.interface';

@Injectable()
export class ErrorMsgService {
     public getValidatorErrorMessage(validatorName: string): string {
          const messages: ValidationError[] = [
               { name: 'required', text: 'To pole jest wymagane.' },
               { name: 'minlength', text: 'Wpisano zbyt małą ilość znaków.' },
               { name: 'maxlength', text: 'Przekroczono dopuszczalną ilość znaków.' },
               { name: 'lettersOnly', text: 'Dopuszczalne są tylko litery.' },
               { name: 'notNull', text: 'Wpisana wartość musi być większa od zera.' },
               { name: 'pattern', text: 'Niewłaściwy format danych.' },
               { name: 'email', text: 'Wprowadź poprawny adres e-mail.' },
               { name: 'phone', text: 'Niepoprawny numer telefonu.' },
               { name: 'nip', text: 'Niepoprawny numer nip.' },
               { name: 'regon', text: 'Niepoprawny numer regon.' },
          ];

          const temp: ValidationError[] = messages.filter((t) => t.name === validatorName);
          return temp[0] ? temp[0].text : '';
     }
}
