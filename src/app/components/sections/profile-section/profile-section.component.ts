import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProfileSectionComponent {

  @Input() title: string = '';
  @Input() warning: string = 'Вносите реальные данные, потому что они будут отображены в сертификате';

}
