import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
        name: ['', [Validators.required, Validators.min(3)]],
        surname: ['', [Validators.required, Validators.min(3)]],
        email: ['', [Validators.required, Validators.email]],
      }),

      passwordDetails: this.fb.group({
        password: ['', [Validators.required, Validators.min(8)]],
        repassword: ['', [Validators.required]],
      }),

      chooseCourse: this.fb.group({
        direction: ['', Validators.required],
        course: ['', Validators.required]
      })
    })
    this.form.valueChanges.subscribe(res=>{
      console.log(this.form);
    })

  }


  next() {
    this.step++;
  }

  control(group: string, control: string) {
    return this.form.get(group)?.get(control);
  }

  hasError(formGroupName:string, formControlName: string, errorName: string) {
    return this.control(formGroupName, formControlName)?.touched && this.control(formGroupName, formControlName)?.dirty && this.control(formGroupName, formControlName)?.hasError(errorName)
  }
}
