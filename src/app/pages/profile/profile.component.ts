import {Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef} from '@angular/core';
import {CoursesService} from "../../services/courses.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  constructor(
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
