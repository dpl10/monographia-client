/* imports from node_modules */
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
import { TranslateTestingModule } from 'ngx-translate-testing';
/* imports from app */
import { FormlySelectbuttonComponent } from '@monographia/FormlyPrimeNG/formly-selectbutton/formly-selectbutton.component';
describe('FormlySelectbuttonComponent', () => {
	let spectator: SpectatorWithHost<FormlySelectbuttonComponent>;
	const createHost = createHostComponentFactory({
		component: FormlySelectbuttonComponent,
		imports: [
			FormlyModule,
			ReactiveFormsModule,
			SelectButtonModule,
			FormlySelectModule,
			TranslateTestingModule.withTranslations(require('@monographiaAssets/i18n/en.json'), require('@monographiaAssets/i18n/es.json'))
		]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-formly-selectbutton></app-formly-selectbutton>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-formly-selectbutton></app-formly-selectbutton>`);
		expect('p-selectButton').toExist();
	});
	it('should be visible', () => {
		spectator = createHost(`<app-formly-selectbutton></app-formly-selectbutton>`);
		expect('p-selectButton').toBeVisible();
	});
});
