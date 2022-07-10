import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export const PasswordRegExp = /^[A-Za-z][A-Za-z0-9]*$/;
export const EmailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PasswordSpecialSymbols = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
export const NumbersRegExp = /\d/;
export const RussianLettersPattern = /^[a-zа-яё]+$/i;

export const NameValidators = [
  Validators.required,
  Validators.minLength(2),
  Validators.maxLength(10),
  Validators.pattern(RussianLettersPattern)
];

export const PasswordValidators = [
  Validators.required,
  Validators.minLength(8),
  Validators.maxLength(20),
  Validators.pattern(PasswordRegExp)
];

export const EmailValidator = [
  Validators.required,
  Validators.pattern(EmailRegExp)
]

export const CheckIfErrorEmpty = (error: ValidationErrors | null) => {
  return error && Object.keys(error).length ? error : null;
};

export const validatePasswords = (
  passField: string = 'password',
  confirmPasswordField: string = 'confirmPassword'
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const password: AbstractControl | null = control?.get(passField);
    const confirmPassword: AbstractControl | null = control?.get(confirmPasswordField);

    const passwordErrors = password?.errors ?? null;
    const confirmPasswordErrors = confirmPassword?.errors ?? null;

    if (password?.value !== confirmPassword?.value) {
      confirmPassword?.setErrors({ ...confirmPasswordErrors, notSame: true }, { emitEvent: false });
      return { notSame: true };
    }

    delete passwordErrors?.['duplicateEmail'];
    delete confirmPasswordErrors?.['notSame'];
    password?.setErrors(CheckIfErrorEmpty(passwordErrors), { emitEvent: false });
    confirmPassword?.setErrors(CheckIfErrorEmpty(confirmPasswordErrors), { emitEvent: false });

    return null;
  };
};


