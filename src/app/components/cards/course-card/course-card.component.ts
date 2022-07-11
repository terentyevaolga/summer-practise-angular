import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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

}
