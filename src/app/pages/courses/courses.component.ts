import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {PracticalWorkService} from "../../services/practicalWork.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit {

  practicalWork$ = this.practicalWorkService.practicalWork$

  constructor(
    private practicalWorkService: PracticalWorkService,
    private spinner: NgxSpinnerService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
      this.cdr.markForCheck();
    }, 0);
  }

}
