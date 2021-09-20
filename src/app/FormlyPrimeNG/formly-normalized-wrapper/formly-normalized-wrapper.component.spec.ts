/* imports from node_modules */
import { CalendarModule } from 'primeng/calendar';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
import { TranslateTestingModule } from 'ngx-translate-testing';
/* imports from app */
import { FormlyNormalizedWrapperComponent } from '@monographia/FormlyPrimeNG/formly-normalized-wrapper/formly-normalized-wrapper.component';
/*describe('FormlyNormalizedWrapperComponent', () => {
	let spectator: SpectatorWithHost<FormlyNormalizedWrapperComponent>;
	const createHost = createHostComponentFactory({
		component: FormlyNormalizedWrapperComponent,
		imports: [
			CalendarModule,
			FormlyModule,
			ReactiveFormsModule,
			TranslateTestingModule.withTranslations(require('@monographiaAssets/i18n/en.json'), require('@monographiaAssets/i18n/es.json'))
		]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-formly-normalized-wrapper></app-formly-normalized-wrapper>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-formly-normalized-wrapper></app-formly-normalized-wrapper>`);
		expect('p-calendar').toExist();
	});
	it('should be visible', () => {
		spectator = createHost(`<app-formly-normalized-wrapper></app-formly-normalized-wrapper>`);
		expect('p-calendar').toBeVisible();
	});
// add tests
});*/
