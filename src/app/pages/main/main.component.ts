import { Component, ChangeDetectionStrategy } from '@angular/core';
import {CoursesService} from "../../services/courses.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  courses$ = this.coursesService.courses$;

  constructor(
    private coursesService: CoursesService
  ) { }

}
