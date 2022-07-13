import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileDownloadComponent {
  @Input() file: string = '';

}
