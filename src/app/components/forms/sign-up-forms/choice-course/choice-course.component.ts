import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-choice-course',
  templateUrl: './choice-course.component.html',
  styleUrls: ['./choice-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChoiceCourseComponent implements OnInit {

  choiceCourse: FormGroup;

  directions: Array<string> = [
    'Продуктовый дизайн',
    'Лаборатория: IOS-разработка',
    'QA. Тестирование для начинающих',
    'Frontend-разработка',
    'Java-разработка',
    'Системная аналитика',
    'Продуктовый дизайн',
    'Лаборатория: IOS-разработка'
  ]

  courses: Array<string> = [
    '1', '2', '3', '4'
  ]

  constructor(private fb: FormBuilder) {
    this.choiceCourse = this.fb.group({
      direction: [''],
      course: ['']
    });
  }

  ngOnInit(): void {
  }

  signUp() {
    console.log(this.choiceCourse.value);
  }

}
