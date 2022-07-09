import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-form-footer',
  templateUrl: './form-footer.component.html',
  styleUrls: ['./form-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFooterComponent {
  @Input() text: string = 'У вас уже есть профиль?';
  @Input() link: string = '/signin';
  @Input() action: string = 'Войдите';
}
