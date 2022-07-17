import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button-with-icon',
  templateUrl: './button-with-icon.component.html',
  styleUrls: ['./button-with-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonWithIconComponent {

  type: string = 'button';
  @Input() theme: 'DEFAULT' | 'WHITE' | 'GREY' = 'DEFAULT'
  @Output() submit = new EventEmitter();

}
