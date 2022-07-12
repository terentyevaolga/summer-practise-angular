import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {PracticalWorkService} from "../../../services/practicalWork.service";
import {ActivatedRoute} from "@angular/router";
import {PracticalWorkModel} from "../../../models/practicalWork";

@Component({
  selector: 'app-practical-work-section',
  templateUrl: './practical-work-section.component.html',
  styleUrls: ['./practical-work-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PracticalWorkSectionComponent implements OnInit {

  practicalWork$ = this.practicalWorkService.practicalWork$;
  practicalWork: PracticalWorkModel | null = null;
  id: number = this.activateRoute.snapshot.params['id'];

  constructor(
    private practicalWorkService: PracticalWorkService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.practicalWork$
      .getValue()
      .filter((practicalWork: PracticalWorkModel) => (practicalWork.id === +this.id))
      .map((work: PracticalWorkModel) => {
        this.practicalWork = work;
      })
  }
}
