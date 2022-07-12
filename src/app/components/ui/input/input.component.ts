import {Component, ChangeDetectionStrategy, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() password: boolean = false;
  @Input() type: 'text' | 'password' | 'email' | 'file' = 'text'
  @Input() placeholder: string = '';
  value: string = '';
  show:boolean = false;
  changeType:boolean = false;

  toggle(): void {
    this.show = !this.show;
    this.changeType = !this.changeType
  }

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
    this.value = value.target.value
    this.onChangeCallback(value.target.value)
    this.onTouchedCallback();
  }

}
