import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

export class ListForm {
    public form: FormGroup = this.createFormsArray();

    constructor(private fb: FormBuilder) { }

    public get itemsArray(): FormArray {
        return this.form.get('basics') as FormArray;
    }

    public createForm(): FormGroup {
        return this.fb.group({
            id: [''],
            name: [''],
        });
    }

    public getBasicControls(): AbstractControl[] {
        return (this.form.get('basics') as FormArray).controls;
    }

    public getDetailsControls(): AbstractControl[] {
        return (this.form.get('details') as FormArray).controls;
    }
    public getRodoControls(): AbstractControl[] {
        return (this.form.get('rodo') as FormArray).controls;
    }
    public getPersonCategoriesControls(): AbstractControl[] {
        return (this.form.get('person_categories') as FormArray).controls;
    }
    public get rodo_others(): AbstractControl | null {
        return this.form.get('rodo_others');
    }
    public get person_description(): AbstractControl | null {
        return this.form.get('person_description');
    }
//ListForm 
    private createFormsArray(): FormGroup {
        return (this.form = this.fb.group({
            hobbies: this.fb.group({
                favoriteHobby: ['']
              }),
            // basics: new FormArray([]),
            // basics: this.fb.group(ListForm),
            basics:  new ListForm(this.fb),
            details: new FormArray([]),
            rodo: new FormArray([]),
            rodo_others: [''],
            person_categories: new FormArray([]),
            person_description: [''],
        }));
    }
}