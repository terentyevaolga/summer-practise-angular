import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

// import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from "@angular/forms";
//
// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.scss'],
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class SignupComponent implements OnInit {
//
//   personalDetails!: FormGroup;
//   emailLetter!: FormGroup;
//   passwordDetails!: FormGroup;
//
//   step = 1;
//
//   personalDetails_step = false;
//   emailLetter_step = false;
//   passwordDetails_step = false;
//
//   constructor(private formBuilder: FormBuilder) { }
//
//   ngOnInit() {
//     this.personalDetails = this.formBuilder.group({
//       name: ['', Validators.required],
//       surname: ['',Validators.required],
//       email: ['', Validators.required]
//     });
//     this.passwordDetails = this.formBuilder.group({
//       password: ['', Validators.required],
//       repassword: ['',Validators.required],
//     });
//   }
//
//   next() {
//     if (this.step == 1) {
//       this.personalDetails_step = true;
//       if (this.personalDetails.invalid) { return }
//       this.step++
//     }
//     if (this.step == 2) {
//       this.emailLetter_step = true;
//       if (this.emailLetter.invalid) { return }
//       this.step++
//     }
//   }
//
//   previous() {
//     this.step--
//     if (this.step == 1) {
//       this.personalDetails_step = false;
//     }
//     if (this.step == 2) {
//       this.emailLetter_step = false;
//     }
//   }
//
//   submit() {
//     if (this.step == 3) {
//       this.passwordDetails_step = true;
//       if (this.passwordDetails.invalid) {return}
//     }
//   }
// }
