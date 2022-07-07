import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent{
	@Input() type: 'text' | 'password' | 'email' = 'text'
	@Input() placeholder: string = '';


  input: FormControl = new FormControl('')

  onChange: any = (value: any) => {
    this.input.setValue(value);
  }
}
