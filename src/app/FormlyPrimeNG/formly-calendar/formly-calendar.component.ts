import { Component, OnDestroy, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { LocaleSettings } from 'primeng/calendar';
import { Subject } from 'rxjs/Subject';
import { TranslateService } from '@ngx-translate/core';
import { takeUntil } from 'rxjs/operators';
@Component({
	selector: 'app-formly-calendar',
	templateUrl: './formly-calendar.component.html',
	styleUrls: ['./formly-calendar.component.scss']
})
export class FormlyCalendarComponent extends FieldType implements OnDestroy, OnInit {
	calendarLocale: LocaleSettings = { /* hardcoded English default so that calendar can load error free, replaced by the subscription value once it is available */
		firstDayOfWeek: 0,
		dayNames: [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		],
		dayNamesShort: [
			'Sun',
			'Mon',
			'Tue',
			'Wed',
			'Thu',
			'Fri',
			'Sat'
		],
		dayNamesMin: [
			'Su',
			'Mo',
			'Tu',
			'We',
			'Th',
			'Fr',
			'Sa'
		],
		monthNames: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		],
		monthNamesShort: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		],
		today: 'today',
		clear: 'clear'
	};
	private ngUnsubscribe = new Subject();
	yearRange: string = '1450:' + new Date().getFullYear(); /* ca. first printed books */
	constructor(private translateService: TranslateService){
		super();
	}
	ngOnDestroy(){
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
	ngOnInit(){
		this.translateService.get('i18n.calendarLocale').pipe(takeUntil(this.ngUnsubscribe)).subscribe((translation: LocaleSettings): void => {
			this.calendarLocale = translation;
		});
	}
}
