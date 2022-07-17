import {Component, ChangeDetectionStrategy, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploadComponent),
      multi: true
    }
  ]
})
export class FileUploadComponent implements ControlValueAccessor {

  file!: File | null;

  onChangeCallback = (v: any) => {
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

  onChange(value: any): void {
    this.file = value.target.files[0]
    this.onChangeCallback(this.file)
    this.onTouchedCallback();
  }

  toMb(file: File): string {
    if (file !== null) {
      return (file.size / (1024 * 1024)).toFixed(2);
    }
    return '';
  }

  delete() {
    this.file = null;
  }
}
