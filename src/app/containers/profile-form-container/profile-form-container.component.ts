import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-profile-form-container',
  templateUrl: './profile-form-container.component.html',
  styleUrls: ['./profile-form-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileFormContainerComponent {

  @Input() title: string = '';
  @Input() text: string = 'Вносите реальные данные, потому что они будут отображены в сертификате';

}
