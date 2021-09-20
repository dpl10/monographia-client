/* imports from node_modules */
import { CalendarModule } from 'primeng/calendar';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
import { TranslateTestingModule } from 'ngx-translate-testing';
/* imports from app */
import { FormlySubnormalizedUnderbarComponent } from '@monographia/FormlyPrimeNG/formly-subnormalized-underbar/formly-subnormalized-underbar.component';
describe('FormlySubnormalizedUnderbarComponent', () => {
	let spectator: SpectatorWithHost<FormlySubnormalizedUnderbarComponent>;
	const createHost = createHostComponentFactory({
		component: FormlySubnormalizedUnderbarComponent,
		imports: [
			CalendarModule,
			FormlyModule,
			ReactiveFormsModule,
			TranslateTestingModule.withTranslations(require('@monographiaAssets/i18n/en.json'), require('@monographiaAssets/i18n/es.json'))
		]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-formly-subnormalized-underbar></app-formly-subnormalized-underbar>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-formly-subnormalized-underbar></app-formly-subnormalized-underbar>`);
		expect('p-calendar').toExist();
	});
	it('should be visible', () => {
		spectator = createHost(`<app-formly-subnormalized-underbar></app-formly-subnormalized-underbar>`);
		expect('p-calendar').toBeVisible();
	});
// add tests
});
