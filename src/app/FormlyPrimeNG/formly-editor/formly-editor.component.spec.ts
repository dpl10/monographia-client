/* imports from node_modules */
import { EditorModule } from 'primeng/editor';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
import { TranslateTestingModule } from 'ngx-translate-testing';
/* imports from app */
import { FormlyEditorComponent } from '@monographia/FormlyPrimeNG/formly-editor/formly-editor.component';
describe('FormlyEditorComponent', () => {
	let spectator: SpectatorWithHost<FormlyEditorComponent>;
	const createHost = createHostComponentFactory({
		component: FormlyEditorComponent,
		imports: [
			EditorModule,
			FormlyModule,
			ReactiveFormsModule,
			TranslateTestingModule.withTranslations(require('@monographiaAssets/i18n/en.json'), require('@monographiaAssets/i18n/es.json'))
		]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-formly-editor></app-formly-editor>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-formly-editor></app-formly-editor>`);
		expect('div').toExist();
	});
	it('should have class "formlyEditor"', () => {
		spectator = createHost(`<app-formly-editor></app-formly-editor>`);
		expect('div').toHaveClass('formlyEditor');
	});
	it('should exist', () => {
		spectator = createHost(`<app-formly-editor></app-formly-editor>`);
		expect('p-editor').toExist();
	});
	it('should be visible', () => {
		spectator = createHost(`<app-formly-editor></app-formly-editor>`);
		expect('p-editor').toBeVisible();
	});
});
