import {Component, ChangeDetectionStrategy, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropDownListComponent),
      multi: true
    }
  ]
})
export class DropDownListComponent implements ControlValueAccessor {

  @Input() optionsList: Array<string> = [];
  @Input() selectedOption: string = ''
  show: boolean = false
  value: string = '';

  setShow(): void {
    this.show = !this.show
  }

  onChangeCallback = (v: string) => {
  }

  onTouchedCallback = () => {
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  writeValue(obj: any): void {
  }

  onChange(value: string): void {
    this.value = value
    this.selectedOption = value;
    this.show = false;
    this.onChangeCallback(value)
    this.onTouchedCallback();
  }
}
