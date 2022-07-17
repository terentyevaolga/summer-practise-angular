import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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

  directions: Array<string> = [
    'Продуктовый дизайн',
    'Лаборатория: IOS-разработка',
    'QA. Тестирование для начинающих',
    'Frontend-разработка',
    'Java-разработка',
    'Системная аналитика'
  ]

  courses: Array<string> = [
    '1', '2', '3', '4'
  ]

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      userDetails: this.fb.group({
        name: ['', [...NameValidators]],
        surname: ['', [...NameValidators]],
        email: ['', [...EmailValidator]],
      }),

      passwordDetails: this.fb.group({
        password: ['', [...PasswordValidators]],
        repassword: ['', [...PasswordValidators]],
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

  signUp() {
    console.log(this.form.value)
  }

  control(group: string, control: string) {
    return this.form.get(group)?.get(control);
  }

  getGroup(name: string): FormGroup {
    return this.form.get(name) as FormGroup
  }

  hasError(formGroup: string, formControlName: string, errorName: string) {
    return (this.control(formGroup, formControlName)?.touched || this.control(formGroup, formControlName)?.dirty) && this.control(formGroup, formControlName)?.hasError(errorName)
  }
}
