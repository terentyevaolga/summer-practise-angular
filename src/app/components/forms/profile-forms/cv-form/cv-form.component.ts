import { Component, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      experience: ['', Validators.required],
      cvDownload: [''],
      portfolio: ['', Validators.required]
    });
    this.form.markAllAsTouched();
  }

  saveCV() {
    console.log(this.form.value)
  }
}
