import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
	selector: 'app-course-card',
	templateUrl: './course-card.component.html',
	styleUrls: ['./course-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit {
	@Input() title: string = '';
	@Input() text: string = '';
	@Input() img: string = '';

  showButton: boolean = false;

  constructor(private sanitizer: DomSanitizer) {
    sanitizer.bypassSecurityTrustHtml(this.text)
  }

  ngOnInit() {
    console.log(this.img);
  }

}
