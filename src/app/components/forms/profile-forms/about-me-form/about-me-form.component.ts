import { Component, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CityValidator, NameValidators, NicknameValidator, PhoneValidator} from "../../../../utils/validations.utils";

@Component({
  selector: 'app-about-me-form',
  templateUrl: './about-me-form.component.html',
  styleUrls: ['./about-me-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeFormComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [...NameValidators]],
      surname: ['', [...NameValidators]],
      birthDate: ['', [Validators.required]],
      phone: ['', [...PhoneValidator]],
      nickname: ['', [...NicknameValidator]],
      city: ['', [...CityValidator]]
    });
    this.form.markAllAsTouched();
  }

  saveAboutMe() {
    console.log(this.form.value)
  }

  control(name: string) {
    return this.form.get(name);
  }

  hasError(formControlName: string, errorName: string) {
    return this.control(formControlName)?.touched && this.control(formControlName)?.dirty && this.control(formControlName)?.hasError(errorName)
  }
}
