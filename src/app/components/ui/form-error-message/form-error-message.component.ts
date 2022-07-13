import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-form-error-message',
  templateUrl: './form-error-message.component.html',
  styleUrls: ['./form-error-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormErrorMessageComponent {

  @Input() text: string = 'Это поле обязательно'

}
