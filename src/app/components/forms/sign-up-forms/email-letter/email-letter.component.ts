import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-email-letter',
  templateUrl: './email-letter.component.html',
  styleUrls: ['./email-letter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailLetterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
