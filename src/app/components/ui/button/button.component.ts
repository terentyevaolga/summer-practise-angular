import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() type: 'submit' | 'button' | 'reset' = 'button';
  @Input() theme: 'BLUE' | 'GREY' | 'DEFAULT' = 'GREY'
  @Input() color?: string
  @Output() submit = new EventEmitter();
}
