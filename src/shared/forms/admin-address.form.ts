import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class AdminAddressForm extends BaseForm {
     protected frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               street: ['', [Validators.required, Validators.maxLength(30)]],
               city: ['', [Validators.maxLength(50)]],
               gmina: ['', [Validators.maxLength(50)]],
               voivoidship: ['', [Validators.maxLength(50)]],
               postalCode: ['', [Validators.maxLength(20)]],
               houseNr: ['', []],
               localNr: ['', []],
               country: ['', []],
               powiat: ['', []],
          });
     }

     public get street(): AbstractControl | null {
          return this.frm.get('street');
     }
     public get city(): AbstractControl | null {
          return this.frm.get('city');
     }
     public get gmina(): AbstractControl | null {
          return this.frm.get('gmina');
     }
     public get voivoidship(): AbstractControl | null {
          return this.frm.get('voivoidship');
     }
     public get postalCode(): AbstractControl | null {
          return this.frm.get('postalCode');
     }
     public get houseNr(): AbstractControl | null {
          return this.frm.get('houseNr');
     }
     public get localNr(): AbstractControl | null {
          return this.frm.get('localNr');
     }
     public get country(): AbstractControl | null {
          return this.frm.get('country');
     }
     public get powiat(): AbstractControl | null {
          return this.frm.get('powiat');
     }
}
