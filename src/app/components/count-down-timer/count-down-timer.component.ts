import {Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountDownTimerComponent implements OnInit {

  @Input() init: number = 0;
  count: number = 0;

  constructor(private cdr: ChangeDetectorRef) {
  }

  startCountDown() {
    if (this.init && this.init > 0) {
      this.count = this.init;
      this.doCountDown();
    }
  }

  doCountDown() {
    setTimeout(() => {
      this.count = this.count - 1;
      this.cdr.markForCheck();
    }, 1000);
  }

  ngOnInit(): void {
    this.startCountDown();
  }
}
