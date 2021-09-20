/* imports from node_modules */
import { DropdownModule } from 'primeng/dropdown';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { ReactiveFormsModule } from '@angular/forms';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
import { TranslateTestingModule } from 'ngx-translate-testing';
/* imports from app */
import { FormlyNormalizedDropdownComponent } from '@monographia/FormlyPrimeNG/formly-normalized-dropdown/formly-normalized-dropdown.component';
describe('FormlyNormalizedDropdownComponent', () => {
	let spectator: SpectatorWithHost<FormlyNormalizedDropdownComponent>;
	const createHost = createHostComponentFactory({
		component: FormlyNormalizedDropdownComponent,
		imports: [
			DropdownModule,
			FormlyModule,
			FormlySelectModule,
			ReactiveFormsModule,
			TranslateTestingModule.withTranslations(require('@monographiaAssets/i18n/en.json'), require('@monographiaAssets/i18n/es.json'))
		]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-formly-normalized-dropdown></app-formly-normalized-dropdown>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-formly-normalized-dropdown></app-formly-normalized-dropdown>`);
		expect('p-dropdown').toExist();
	});
	it('should be visible', () => {
		spectator = createHost(`<app-formly-normalized-dropdown></app-formly-normalized-dropdown>`);
		expect('p-dropdown').toBeVisible();
	});
// test onChange
});
