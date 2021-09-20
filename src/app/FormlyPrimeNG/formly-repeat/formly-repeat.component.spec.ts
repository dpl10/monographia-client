/* imports from node_modules */
import { FormlyModule } from '@ngx-formly/core';
import { MockComponent, SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateTestingModule } from 'ngx-translate-testing';
/* imports from app */
import { FormlyRepeatComponent } from '@monographia/FormlyPrimeNG/formly-repeat/formly-repeat.component';
describe('FormlyRepeatComponent', () => {
	let spectator: SpectatorWithHost<FormlyRepeatComponent>;
	const createHost = createHostComponentFactory({
		component: FormlyRepeatComponent,
		declarations: [
			MockComponent({
				selector: 'app-fa-minus'
			})
		],
		imports: [
			FormlyModule,
			ReactiveFormsModule,
			TranslateTestingModule.withTranslations(require('@monographiaAssets/i18n/en.json'), require('@monographiaAssets/i18n/es.json'))
		]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-formly-repeat></app-formly-repeat>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-formly-repeat></app-formly-repeat>`);
		expect('p-calendar').toExist();
	});
	it('should be visible', () => {
		spectator = createHost(`<app-formly-repeat></app-formly-repeat>`);
		expect('p-calendar').toBeVisible();
	});
// add tests
});
