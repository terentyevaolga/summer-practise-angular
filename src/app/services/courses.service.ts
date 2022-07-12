import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {MockCourse} from '../mocks/course-mock';
import {CourseModel} from "../models/course";


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses$ :BehaviorSubject<Array<CourseModel>> = new BehaviorSubject<Array<CourseModel>>(MockCourse);

  constructor() {
  }
}
