import { Component, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInFormComponent {

  form: FormGroup;

  signUp:boolean = true;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      login: [''],
      password: ['']
    });
  }
}
