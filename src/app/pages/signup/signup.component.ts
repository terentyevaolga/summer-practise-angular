import { Component, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent {

  form: FormGroup;
  step = 1;

  visible:boolean = true;
  visibleRepassword:boolean = true;
  changeType:boolean = true;
  changeTypeRepassword:boolean = true;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      userDetails: this.fb.group({
        name: [''],
        surname: [''],
        email: ['']
      }),

      passwordDetails: this.fb.group({
        password: [''],
        repassword: ['']
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

  next():void {
    this.step++;
  }

}
