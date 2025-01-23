import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { BaseForm } from './base.form';

export class ViolationDetailsForm extends BaseForm {
     protected frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               details: ['', []],
               violationResult: new FormArray([]),
               securityReason: ['', []],
               malwareRequirements: ['', []],
               restoredBackup: [''],
               violationReasons: new FormArray([]),
               violationFeatures: new FormArray([]),
               childs: [''],
          });
     }

     public get securityReason(): AbstractControl | null {
          return this.frm.get('securityReason');
     }
     public get malwareRequirements(): AbstractControl | null {
          return this.frm.get('malwareRequirements');
     }
     public get restoredBackup(): AbstractControl | null {
          return this.frm.get('restoredBackup');
     }
     public get childs(): AbstractControl | null {
          return this.frm.get('childs');
     }

     public get violationResultArray(): FormArray {
          return this.form.get('violationResult') as FormArray;
     }
     public get violationReasonsArray(): FormArray {
          return this.form.get('violationReasons') as FormArray;
     }
     public get violationFeaturesArray(): FormArray {
          return this.form.get('violationFeatures') as FormArray;
     }

     public createFormArray(): FormGroup {
          return this.fb.group({
               id: [''],
               name: [''],
          });
     }
}
