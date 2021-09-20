/* imports from node_modules */
import { CalendarModule } from 'primeng/calendar';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
import { TranslateTestingModule } from 'ngx-translate-testing';
/* imports from app */
import { FormlySubnormalizedWrapperComponent } from '@monographia/FormlyPrimeNG/formly-subnormalized-wrapper/formly-subnormalized-wrapper.component';
describe('FormlySubnormalizedWrapperComponent', () => {
	let spectator: SpectatorWithHost<FormlySubnormalizedWrapperComponent>;
	const createHost = createHostComponentFactory({
		component: FormlySubnormalizedWrapperComponent,
		imports: [
			CalendarModule,
			FormlyModule,
			ReactiveFormsModule,
			TranslateTestingModule.withTranslations(require('@monographiaAssets/i18n/en.json'), require('@monographiaAssets/i18n/es.json'))
		]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-formly-subnormalized-wrapper></app-formly-subnormalized-wrapper>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-formly-subnormalized-wrapper></app-formly-subnormalized-wrapper>`);
		expect('div').toExist();
	});
	it('should be visible', () => {
		spectator = createHost(`<app-formly-subnormalized-wrapper></app-formly-subnormalized-wrapper>`);
		expect('div').toBeVisible();
	});
// add tests
});
