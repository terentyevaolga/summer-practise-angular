import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmailValidator, NameValidators, PasswordValidators} from "../../../../utils/validations.utils";

@Component({
  selector: 'app-password-details',
  templateUrl: './password-details.component.html',
  styleUrls: ['./password-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordDetailsComponent implements OnInit {

  passwordDetails: FormGroup;

  constructor(private fb: FormBuilder) {
    this.passwordDetails = this.fb.group({
      password: ['', [...PasswordValidators]],
      repassword: ['', [...PasswordValidators]]
    });
  }

  ngOnInit(): void {

  }

}
