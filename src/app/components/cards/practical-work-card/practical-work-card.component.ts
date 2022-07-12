import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {PracticalWorkModel} from "../../../models/practicalWork";

@Component({
  selector: 'app-practical-work-card',
  templateUrl: './practical-work-card.component.html',
  styleUrls: ['./practical-work-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PracticalWorkCardComponent  {
  @Input() practicalWork: PracticalWorkModel | null = null;

}
