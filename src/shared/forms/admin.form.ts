import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class AdminDataForm extends BaseForm {
     protected frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               fullNameAdmin: ['', [Validators.required]],
               regon: ['', [Validators.required]],
               nip: ['', [Validators.maxLength(20)]],
               krs: ['', [Validators.maxLength(50)]],
               forSectorPublic: ['', []],
               forSectorPrivate: ['', []],
          });
     }

     public get fullNameAdmin(): AbstractControl | null {
          return this.frm.get('fullNameAdmin');
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
     public get forSectorPublic(): AbstractControl | null {
          return this.frm.get('forSectorPublic');
     }
     public get forSectorPrivate(): AbstractControl | null {
          return this.frm.get('forSectorPrivate');
     }
}
