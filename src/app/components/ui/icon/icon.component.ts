import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @Input() name: string = '';
  @Input() size: string = '24px';

  getPath(): string {
    const name = this.name;
    this.name = `/assets/sprite.svg#${name}`
    return this.name;
  }
}
