import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {ControlValueAccessor} from "@angular/forms";

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent implements ControlValueAccessor{
  @Input() placeholder: string = '';

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
}
