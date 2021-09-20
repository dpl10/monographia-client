/* imports from node_modules */
import { FormlyModule } from '@ngx-formly/core';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
import { TranslateTestingModule } from 'ngx-translate-testing';
/* imports from app */
import { FormlyInputtextComponent } from '@monographia/FormlyPrimeNG/formly-inputtext/formly-inputtext.component';
describe('FormlyInputtextComponent', () => {
	let spectator: SpectatorWithHost<FormlyInputtextComponent>;
	const createHost = createHostComponentFactory({
		component: FormlyInputtextComponent,
		imports: [
			FormlyModule,
			InputTextModule,
			ReactiveFormsModule,
			TranslateTestingModule.withTranslations(require('@monographiaAssets/i18n/en.json'), require('@monographiaAssets/i18n/es.json'))
		]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-formly-inputtext></app-formly-inputtext>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-formly-inputtext></app-formly-inputtext>`);
		expect('input').toExist();
	});
	it('should be visible', () => {
		spectator = createHost(`<app-formly-inputtext></app-formly-inputtext>`);
		expect('input').toBeVisible();
	});
	it('should exist', () => {
		spectator = createHost(`<app-formly-inputtext></app-formly-inputtext>`);
		expect('pInputText').toExist();
	});
	it('should be visible', () => {
		spectator = createHost(`<app-formly-inputtext></app-formly-inputtext>`);
		expect('pInputText').toBeVisible();
	});
});
