/* imports from node_modules */
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TranslateTestingModule } from 'ngx-translate-testing';
/* imports from app */
import { FormlyTogglebuttonComponent } from '@monographia/FormlyPrimeNG/formly-togglebutton/formly-togglebutton.component';
describe('FormlyTogglebuttonComponent', () => {
	let spectator: SpectatorWithHost<FormlyTogglebuttonComponent>;
	const createHost = createHostComponentFactory({
		component: FormlyTogglebuttonComponent,
		imports: [
			FormlyModule,
			ReactiveFormsModule,
			ToggleButtonModule,
			TranslateTestingModule.withTranslations(require('@monographiaAssets/i18n/en.json'), require('@monographiaAssets/i18n/es.json'))
		]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-formly-togglebutton></app-formly-togglebutton>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-formly-togglebutton></app-formly-togglebutton>`);
		expect('p-toggleButton').toExist();
	});
	it('should be visible', () => {
		spectator = createHost(`<app-formly-togglebutton></app-formly-togglebutton>`);
		expect('p-toggleButton').toBeVisible();
	});
});
