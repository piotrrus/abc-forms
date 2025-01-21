import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class AdminAddressForm extends BaseForm {
     protected frm: FormGroup = this.createForm();
     protected createForm(): FormGroup {
          return this.fb.group({
               street: ['', [Validators.required, Validators.maxLength(30)]],
               city: ['', [Validators.maxLength(50)]],
               countyAdministrativeArea: ['', [Validators.maxLength(50)]],
               provinceAdministrativeArea: ['', [Validators.maxLength(50)]],
               postCode: ['', [Validators.maxLength(20)]],
               numberHouse: ['', []],
               numberflat: ['', []],
               country: ['', []],
               communeAdministrativeArea: ['', []],
          });
     }

     public get street(): AbstractControl | null {
          return this.frm.get('street');
     }
     public get city(): AbstractControl | null {
          return this.frm.get('city');
     }
     public get countyAdministrativeArea(): AbstractControl | null {
          return this.frm.get('countyAdministrativeArea');
     }
     public get provinceAdministrativeArea(): AbstractControl | null {
          return this.frm.get('provinceAdministrativeArea');
     }
     public get postCode(): AbstractControl | null {
          return this.frm.get('postCode');
     }
     public get numberHouse(): AbstractControl | null {
          return this.frm.get('numberHouse');
     }
     public get numberflat(): AbstractControl | null {
          return this.frm.get('numberflat');
     }
     public get country(): AbstractControl | null {
          return this.frm.get('country');
     }
     public get communeAdministrativeArea(): AbstractControl | null {
          return this.frm.get('communeAdministrativeArea');
     }
}
