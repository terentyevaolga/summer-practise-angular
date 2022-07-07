import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent{
	@Input() type: 'text' | 'password' | 'email' = 'text'
	@Input() placeholder: string = '';
}
