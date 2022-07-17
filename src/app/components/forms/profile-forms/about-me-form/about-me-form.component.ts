import { Component, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PhoneValidator} from "../../../../utils/validations.utils";

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
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      birthDate: [''],
      phone: ['', [...PhoneValidator]],
      nickname: [''],
      city: ['']
    });
    this.form.markAllAsTouched();
  }

  saveAboutMe() {
    console.log(this.form.value)
  }
}
