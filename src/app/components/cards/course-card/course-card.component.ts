import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MainComponent} from "../../../pages/main/main.component";

@Component({
	selector: 'app-course-card',
	templateUrl: './course-card.component.html',
	styleUrls: ['./course-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent {
	@Input() title: string = '';
	@Input() text: string = '';
	@Input() img: string = '';

  @Input() course$ = this.main.courses$;


	constructor(
    private sanitizer: DomSanitizer,
    private main: MainComponent
  ) {
		sanitizer.bypassSecurityTrustHtml(this.text)
	}

}
