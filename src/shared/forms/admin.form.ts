import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class AdminDataForm extends BaseForm {
     protected frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               admin: ['', [Validators.required]],
               regon: ['', [Validators.required]],
               nip: ['', [Validators.maxLength(20)]],
               krs: ['', [Validators.maxLength(50)]],
               sector: ['', []],
          });
     }

     public get admin(): AbstractControl | null {
          return this.frm.get('admin');
     }
     public get regon(): AbstractControl | null {
          return this.frm.get('regon');
     }
     public get nip(): AbstractControl | null {
          return this.frm.get('nip');
     }
     public get krs(): AbstractControl | null {
          return this.frm.get('krs');
     }
     public get sector(): AbstractControl | null {
          return this.frm.get('sector');
     }
}
