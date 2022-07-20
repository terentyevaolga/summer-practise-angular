import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmailValidator, NameValidators, PasswordValidators} from "../../../../utils/validations.utils";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent implements OnInit {

  userDetails: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userDetails = this.fb.group({
      name: ['', [...NameValidators]],
      surname: ['', [...NameValidators]],
      email: ['', [...EmailValidator]],
    });
  }

  ngOnInit(): void {
  }

  next() {
    console.log(this.userDetails.value);
  }

  control(name: string) {
    return this.userDetails.get(name);
  }

  hasError(formControlName: string, errorName: string) {
    return this.control(formControlName)?.touched && this.control(formControlName)?.dirty && this.control(formControlName)?.hasError(errorName)
  }

}
