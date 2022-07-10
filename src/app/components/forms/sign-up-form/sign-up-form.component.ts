import { Component, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmailValidator, NameValidators, PasswordValidators} from "../../../utils/validations.utils";

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpFormComponent {
  form: FormGroup;
  step = 1;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      userDetails: this.fb.group({
        name: ['', [...NameValidators]],
        surname: ['', [...NameValidators]],
        email: ['', [...EmailValidator]]
      }),

      passwordDetails: this.fb.group({
        password: ['', [...PasswordValidators]],
        repassword: ['', [...PasswordValidators]]
      }),

      chooseCourse: this.fb.group({
        direction: [''],
        course: ['']
      })
    })
    this.form.valueChanges.subscribe(res=>{
      console.log(this.form);
    })

  }

  next() {
    this.step++;
  }

  control(name: string) {
    return this.form.get(name);
  }

  hasError(formControlName: string, errorName: string) {
    return this.control(formControlName)?.touched && this.control(formControlName)?.dirty && this.control(formControlName)?.hasError(errorName)
  }
}
