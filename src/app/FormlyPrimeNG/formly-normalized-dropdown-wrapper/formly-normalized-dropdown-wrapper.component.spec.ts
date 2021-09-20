/* imports from node_modules */
import { ButtonModule } from 'primeng/button';
import { MockComponent, SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
import { TranslateTestingModule } from 'ngx-translate-testing';
/* imports from app */
import { FormlyNormalizedDropdownWrapperComponent } from '@monographia/FormlyPrimeNG/formly-normalized-dropdown-wrapper/formly-normalized-dropdown-wrapper.component';
/*describe('FormlyNormalizedDropdownWrapperComponent', () => {
	let spectator: SpectatorWithHost<FormlyNormalizedDropdownWrapperComponent>;
	const createHost = createHostComponentFactory({
		component: FormlyNormalizedDropdownWrapperComponent,
		declarations: [
			MockComponent({
				selector: 'app-fa-bookAdd'
			}),
			MockComponent({
				selector: 'app-fa-bookEdit'
			})
			MockComponent({
				selector: 'app-fa-cityEdit'
			}),
			MockComponent({
				selector: 'app-fa-file-signature'
			}),
			MockComponent({
				selector: 'app-fa-universityEdit'
			}),
			MockComponent({
				selector: 'app-fa-edit'
			}),
			MockComponent({
				selector: 'app-fa-cityAdd'
			}),
			MockComponent({
				selector: 'app-fa-file-medical'
			}),
			MockComponent({
				selector: 'app-fa-universityAdd'
			}),
			MockComponent({
				selector: 'app-fa-plus-square'
			})
		],
		imports: [
			ButtonModule,
			TranslateTestingModule.withTranslations(require('@monographiaAssets/i18n/en.json'), require('@monographiaAssets/i18n/es.json'))
		]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-formly-normalized-dropdown-wrapper></app-formly-normalized-dropdown-wrapper>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-formly-normalized-dropdown-wrapper></app-formly-normalized-dropdown-wrapper>`);
		expect('div').toExist();
	});
	it('should be visible', () => {
		spectator = createHost(`<app-formly-normalized-dropdown-wrapper></app-formly-normalized-dropdown-wrapper>`);
		expect('div').toBeVisible();
	});
// test both p-button
// test both div
// test editClick
// test newClick
});*/
