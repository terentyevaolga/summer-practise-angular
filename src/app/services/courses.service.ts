import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {CourseModel, MockCourse} from '../mocks/course-mock';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses$ :BehaviorSubject<Array<CourseModel>> = new BehaviorSubject<Array<CourseModel>>(MockCourse);

  constructor() {
  }
}
