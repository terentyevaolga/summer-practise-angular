import { Component, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CourseValidator, GroupValidator, UniversityValidator} from "../../../../utils/validations.utils";

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
      university: ['', [...UniversityValidator]],
      course: ['', [...CourseValidator]],
      group: ['', [...GroupValidator]],
    });
    this.form.markAllAsTouched();
  }

  saveStudyData() {
    console.log(this.form.value)
  }

  control(name: string) {
    return this.form.get(name);
  }

  hasError(formControlName: string, errorName: string) {
    return this.control(formControlName)?.touched && this.control(formControlName)?.dirty && this.control(formControlName)?.hasError(errorName)
  }

}
