import {Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef} from '@angular/core';
import {CoursesService} from "../../services/courses.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  courses$ = this.coursesService.courses$;

  constructor(
    private coursesService: CoursesService,
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
