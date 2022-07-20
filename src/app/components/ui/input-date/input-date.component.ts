import {Component, ChangeDetectionStrategy, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['input-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDateComponent),
      multi: true
    }
  ]
})
export class InputDateComponent implements ControlValueAccessor {

  @Input() date: boolean = false;
  @Input() placeholder: string = '';

  value: string = '';


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
