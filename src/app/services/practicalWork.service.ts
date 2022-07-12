import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {PracticalWorkModel} from "../models/practicalWork";
import {MockPracticalWork} from "../mocks/practical-work-mock";


@Injectable({
  providedIn: 'root'
})
export class PracticalWorkService {
  practicalWork$ :BehaviorSubject<Array<PracticalWorkModel>> = new BehaviorSubject<Array<PracticalWorkModel>>(MockPracticalWork);

  constructor() {
  }
}
