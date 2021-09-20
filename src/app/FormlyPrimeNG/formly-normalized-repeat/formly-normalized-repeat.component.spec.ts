/* imports from node_modules */
import { FormlyModule } from '@ngx-formly/core';
import { MockComponent, SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateTestingModule } from 'ngx-translate-testing';
/* imports from app */
import { FormlyNormalizedRepeatComponent } from '@monographia/FormlyPrimeNG/formly-normalized-repeat/formly-normalized-repeat.component';
describe('FormlyNormalizedRepeatComponent', () => {
	let spectator: SpectatorWithHost<FormlyNormalizedRepeatComponent>;
	const createHost = createHostComponentFactory({
		component: FormlyNormalizedRepeatComponent,
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
		spectator = createHost(`<app-formly-normalized-repeat></app-formly-normalized-repeat>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-formly-normalized-repeat></app-formly-normalized-repeat>`);
		expect('p-calendar').toExist();
	});
	it('should be visible', () => {
		spectator = createHost(`<app-formly-normalized-repeat></app-formly-normalized-repeat>`);
		expect('p-calendar').toBeVisible();
	});
// add tests
});
