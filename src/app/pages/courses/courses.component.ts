import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {PracticalWorkService} from "../../services/practicalWork.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit {

  practicalWork$ = this.practicalWorkService.practicalWork$

  constructor(
    private practicalWorkService: PracticalWorkService
  ) { }

  ngOnInit(): void {
  }

}
