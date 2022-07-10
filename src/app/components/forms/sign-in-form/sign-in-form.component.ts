import { Component, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmailValidator, PasswordValidators} from "../../../utils/validations.utils";


@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      login: ['', [...EmailValidator]],
      password: ['', [...PasswordValidators]]
    });

    this.form.markAllAsTouched();
  }

  control(name: string) {
    return this.form.get(name);
  }

  hasError(formControlName: string, errorName: string) {
    return this.control(formControlName)?.touched && this.control(formControlName)?.dirty && this.control(formControlName)?.hasError(errorName)
  }
}
