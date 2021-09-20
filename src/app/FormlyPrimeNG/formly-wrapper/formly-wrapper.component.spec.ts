/* imports from node_modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { SpectatorWithHost, createHostComponentFactory } from '@netbasal/spectator';
import { TranslateTestingModule } from 'ngx-translate-testing';
/* imports from app */
import { FormlyWrapperComponent } from '@monographia/FormlyPrimeNG/formly-wrapper/formly-wrapper.component';
describe('FormlyWrapperComponent', () => {
	let spectator: SpectatorWithHost<FormlyWrapperComponent>;
	const createHost = createHostComponentFactory({
		component: FormlyWrapperComponent,
		imports: [
			FontAwesomeModule,
			ReactiveFormsModule,
			TranslateTestingModule.withTranslations(require('@monographiaAssets/i18n/en.json'), require('@monographiaAssets/i18n/es.json'))
		]
	});
	it('should be defined', () => {
		spectator = createHost(`<app-fa-universityEdit></app-fa-universityEdit>`);
		expect(spectator.component).toBeDefined();
	});
	it('should exist', () => {
		spectator = createHost(`<app-formly-wrapper></app-formly-wrapper>`);
		expect('div').toExist(); // spectator.query('div').toHaveID('formDescription')
	});
/*	it('should be visible', () => {
		spectator = createHost(`<app-formly-wrapper></app-formly-wrapper>`);
		expect('p-calendar').toBeVisible();
	}); */
});
/*
<div *ngIf="to.label && to.hideLabel !== true" class="ui-widget">
	<div class="formDescription">
		<fa-icon [icon]="faQuestionCircle" size="fa-lg" [fixedWidth]="true"></fa-icon>
		<div class="formDescriptionText">
			{{to.description | translate}}
		</div>
	</div>
	<label [for]="id">
		{{to.label | translate}}
		<ng-container *ngIf="to.required && to.hideRequiredMarker !== true" class="formRequired">*</ng-container>
	</label>
	<div class="formError" *ngIf="showError">
		<fa-icon [icon]="faExclamationTriangle" size="fa-lg" [fixedWidth]="true" class="formErrorIcon"></fa-icon>
		<div class="formErrorText">
			{{to.invalid | translate}}
		</div>
	</div>
</div>
<ng-container #fieldComponent></ng-container>
*/
