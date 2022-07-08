import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
	@Input() type: 'submit' | 'button' | 'reset' = 'button';
	@Input() theme: 'BLUE' | 'GREY' | 'DEFAULT' | 'WHITE' = 'BLUE';
	// @Input() color?: string
	@Input() wide: boolean = false;
	@Input() disabled: boolean = false;
	@Output() submit = new EventEmitter();
}
