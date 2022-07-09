import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

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
        name: [''],
        surname: [''],
        email: ['']
      }),

      passwordInfo: this.fb.group({
        password: [''],
        repassword: ['']
      }),

      chooseCourses: this.fb.group({
        faculty: [''],
        course: ['']
      })
    })
  }

  next() {
    this.step++;
  }
}
