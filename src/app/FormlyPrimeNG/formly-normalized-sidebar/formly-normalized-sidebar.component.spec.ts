/* imports from node_modules */
import { CalendarModule } from 'primeng/calendar';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
import { TranslateTestingModule } from 'ngx-translate-testing';
/* imports from app */
import { FormlyNormalizedSidebarComponent } from '@monographia/FormlyPrimeNG/formly-normalized-sidebar/formly-normalized-sidebar.component';
describe('FormlyNormalizedSidebarComponent', () => {
	let spectator: SpectatorWithHost<FormlyNormalizedSidebarComponent>;
	const createHost = createHostComponentFactory({
		component: FormlyNormalizedSidebarComponent,
		imports: [
			CalendarModule,
			FormlyModule,
			ReactiveFormsModule,
			TranslateTestingModule.withTranslations(require('@monographiaAssets/i18n/en.json'), require('@monographiaAssets/i18n/es.json'))
		]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-formly-normalized-sidebar></app-formly-normalized-sidebar>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-formly-normalized-sidebar></app-formly-normalized-sidebar>`);
		expect('p-calendar').toExist();
	});
	it('should be visible', () => {
		spectator = createHost(`<app-formly-normalized-sidebar></app-formly-normalized-sidebar>`);
		expect('p-calendar').toBeVisible();
	});
// add tests
});
