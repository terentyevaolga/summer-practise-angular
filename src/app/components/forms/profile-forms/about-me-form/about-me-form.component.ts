import { Component, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

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
      name: [''],
      surname: [''],
      birthDate: [''],
      phone: [''],
      nickname: [''],
      city: ['']
    });
    this.form.markAllAsTouched();
  }
}
