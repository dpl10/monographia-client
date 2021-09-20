/* imports from node_modules */
import { CalendarModule } from 'primeng/calendar';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
import { TranslateTestingModule } from 'ngx-translate-testing';
/* imports from app */
import { FormlyCalendarComponent } from '@monographia/FormlyPrimeNG/formly-calendar.component';
describe('FormlyCalendarComponent', () => {
	let spectator: SpectatorWithHost<FormlyCalendarComponent>;
	const createHost = createHostComponentFactory({
		component: FormlyCalendarComponent,
		imports: [
			CalendarModule,
			FormlyModule,
			ReactiveFormsModule,
			TranslateTestingModule.withTranslations(require('@monographiaAssets/i18n/en.json'), require('@monographiaAssets/i18n/es.json'))
		]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-formly-calendar templateOptions=mockTemplateOptions></app-formly-calendar>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-formly-calendar templateOptions=mockTemplateOptions></app-formly-calendar>`);
		expect('p-calendar').toExist();
	});
	it('should be visible', () => {
		spectator = createHost(`<app-formly-calendar templateOptions=mockTemplateOptions></app-formly-calendar>`);
		expect('p-calendar').toBeVisible();
	});
});
