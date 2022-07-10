import { Component, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-study-data-form',
  templateUrl: './study-data-form.component.html',
  styleUrls: ['./study-data-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudyDataFormComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      university: [''],
      course: [''],
      group: [''],
    });
    this.form.markAllAsTouched();
  }

}
