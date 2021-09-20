/* imports from node_modules */
import { FormlyModule } from '@ngx-formly/core';
import { InputMaskModule } from 'primeng/inputmask';
import { ReactiveFormsModule } from '@angular/forms';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
import { TranslateTestingModule } from 'ngx-translate-testing';
/* imports from app */
import { FormlyMaskComponent } from '@monographia/FormlyPrimeNG/formly-mask/formly-mask.component';
describe('FormlyMaskComponent', () => {
	let spectator: SpectatorWithHost<FormlyMaskComponent>;
	const createHost = createHostComponentFactory({
		component: FormlyMaskComponent,
		imports: [
			FormlyModule,
			InputMaskModule,
			ReactiveFormsModule,
			TranslateTestingModule.withTranslations(require('@monographiaAssets/i18n/en.json'), require('@monographiaAssets/i18n/es.json'))
		]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-formly-mask></app-formly-mask>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-formly-mask></app-formly-mask>`);
		expect('p-inputMask').toExist();
	});
	it('should be visible', () => {
		spectator = createHost(`<app-formly-mask></app-formly-mask>`);
		expect('p-inputMask').toBeVisible();
	});
});
