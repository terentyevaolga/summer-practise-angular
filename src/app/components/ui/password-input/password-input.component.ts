import {Component, ChangeDetectionStrategy, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    }
  ]

})
export class PasswordInputComponent implements ControlValueAccessor{

  @Input() placeholder: string = '';
  changeType:boolean = false;
  visible:boolean = false;

  onChangeCallback = (v: string) => {}
  onTouchedCallback = () => {}

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  writeValue(obj: any): void {
  }

  onChange(value: any): void{
    this.onChangeCallback(value.target.value)
    this.onTouchedCallback();
  }

  viewPassword() {
    this.visible = !this.visible;
    this.changeType = !this.changeType;
  }

}
