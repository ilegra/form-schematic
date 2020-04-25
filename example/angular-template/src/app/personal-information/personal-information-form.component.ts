import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { PersonalInformationInterface } from './personal-information.model';

@Component({
  selector: 'app-personal-information-form',
  templateUrl: './personal-information-form.component.html',
  styleUrls: ['./personal-information-form.component.scss']
})
export class PersonalInformationFormComponent implements OnInit {
  public personalInformationForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
     this.personalInformationForm = this.initializeForm();
  }

  private initializeForm() {
     return this.fb.group({
       name: [null, [Validators.required] ], 
       password: [null, [Validators.required] ], 
       email: [null, [Validators.required] ], 
       age: [null, [Validators.required] ], 
       nationality: [null], 
       cpf: [null, [Validators.required] ], 
       phoneNumber: [null], 
     })
  }

  onSubmit() {
    console.log(this.getFormValue());
    alert('form submitted');
    alert(JSON.stringify(this.getFormValue()));
  }

  onReset() {
    this.personalInformationForm.reset();
  }

  getFormValue(): PersonalInformationInterface {
    return this.personalInformationForm.value;
  }

  getFormControlValue(formControlName: string) {
    return this.personalInformationForm.get(formControlName).value;
  }
}